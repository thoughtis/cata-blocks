import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';

import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';

import { useDispatch, useSelect } from '@wordpress/data';
import { store as noticesStore } from '@wordpress/notices';

import { Button, NoticeList, ToggleControl } from '@wordpress/components';

import DebouncedTextControl from './components/debounced-text-control';

import './admin-styles.css';

const SaveButton = ( { onClick } ) => {
    return (
        <Button variant="primary" onClick={ onClick } __next40pxDefaultSize>
            { __( 'Save', 'cata' ) }
        </Button>
    );
};

const Notices = () => {
    const { removeNotice } = useDispatch( noticesStore );
    const notices = useSelect( ( select ) =>
        select( noticesStore ).getNotices()
    );

    if ( notices.length === 0 ) {
        return null;
    }

    return <NoticeList notices={ notices } onRemove={ removeNotice } />;
};

const useSettings = () => {
    const [ postId, setPostId ] = useState();
    const [ active, setActive ] = useState();
	const [ postTitle, setPostTitle ] = useState('');

	const { createSuccessNotice } = useDispatch( noticesStore );

    useEffect( () => {
        apiFetch( { path: '/wp/v2/settings' } ).then( ( settings ) => {
            setActive( settings.cata_blocks.active );
			setPostId( settings.cata_blocks.post_id );
        } );
    }, [] );

	useEffect( () => {

		if ( 0 === postId ) {
			setPostTitle( '' );
		}

		apiFetch( { path: `/wp/v2/posts/${postId}` } ).then( ( post ) => {
            setPostTitle( post.title.rendered );
        } );
	}, [postId] )
    
	const saveSettings = () => {
        apiFetch( {
            path: '/wp/v2/settings',
            method: 'POST',
            data: {
                cata_blocks: {
                   active,
				   post_id: postId
                },
            },
        } ).then( () => {
            createSuccessNotice(
                __( 'Settings saved.', 'cata-blocks' )
            );
        } );;
    };

    return {
        postId,
		setPostId,
		active,
		setActive,
        saveSettings,
		postTitle,
		setPostTitle
    };
};

const PostsList = ( {posts, handleChange, className} ) => {
	return (
		<ul className={className}>
			{
				posts.map( post => (
					<li onClick={() => { handleChange( post.id ) }} key={`cata-post-search-${post.id}`}>{post.title}</li>
				) )
			}
		</ul>
	)
}

const SettingsPage = () => {

	const {
        active,
		setActive,
		postId,
		setPostId,
        saveSettings,
		postTitle,
		setPostTitle
    } = useSettings();

	const [ postsList, setPostsList ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	async function searchPostTitle( searchQuery ) {

		if ( isLoading ) {
			return;
		}

		if ( '' === searchQuery ?? '' ) {
			return;
		}

		setIsLoading( true );

		const posts = await apiFetch( { path: `/wp/v2/posts?search=${searchQuery}` } );

		setPostsList( posts.map( ( { id, title } ) => ({ id, title: title.rendered }) ) );

		setIsLoading( false );
	}

    return (
		<> 
		<Notices />
        <Panel>
            <PanelBody>
                <PanelRow>
                    <div>
						<ToggleControl
							checked={ active }
							label={__('Activate infinite scroll', 'cata')}
							onChange={(nextActive) => setActive(nextActive)}
						/>
					</div>
                </PanelRow>
                <PanelRow>
                    <div>

						<p>{postTitle}</p>

						<DebouncedTextControl
							label="Infinite Scroll Featured Post"
							onDebouncedChange={(nextPostTitle) => searchPostTitle( nextPostTitle )}
							timeout={300}
							type="text"
						/>

						<PostsList
							className="cata-blocks-post-list"
							posts={postsList}
							handleChange={ ( selectedPostId ) => {
								setPostId( selectedPostId )
								setPostsList([])
							}}
						/>
						
					</div>
                </PanelRow>
            </PanelBody>
        </Panel>
		<SaveButton onClick={ saveSettings } />
		</>
   );
};

domReady( () => {
    const root = createRoot(
        document.getElementById( 'cata-blocks-settings' )
    );

    root.render( <SettingsPage /> );
} );