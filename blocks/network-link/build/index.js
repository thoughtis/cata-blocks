/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@wordpress/icons/build-module/icon/index.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/icon/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": function() { return /* reexport safe */ _icon__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "addCard": function() { return /* reexport safe */ _library_add_card__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "addSubmenu": function() { return /* reexport safe */ _library_add_submenu__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "alignCenter": function() { return /* reexport safe */ _library_align_center__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "alignJustify": function() { return /* reexport safe */ _library_align_justify__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "alignLeft": function() { return /* reexport safe */ _library_align_left__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   "alignNone": function() { return /* reexport safe */ _library_align_none__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   "alignRight": function() { return /* reexport safe */ _library_align_right__WEBPACK_IMPORTED_MODULE_7__["default"]; },
/* harmony export */   "archive": function() { return /* reexport safe */ _library_archive__WEBPACK_IMPORTED_MODULE_8__["default"]; },
/* harmony export */   "archiveTitle": function() { return /* reexport safe */ _library_archive_title__WEBPACK_IMPORTED_MODULE_9__["default"]; },
/* harmony export */   "arrowDown": function() { return /* reexport safe */ _library_arrow_down__WEBPACK_IMPORTED_MODULE_10__["default"]; },
/* harmony export */   "arrowLeft": function() { return /* reexport safe */ _library_arrow_left__WEBPACK_IMPORTED_MODULE_11__["default"]; },
/* harmony export */   "arrowRight": function() { return /* reexport safe */ _library_arrow_right__WEBPACK_IMPORTED_MODULE_12__["default"]; },
/* harmony export */   "arrowUp": function() { return /* reexport safe */ _library_arrow_up__WEBPACK_IMPORTED_MODULE_13__["default"]; },
/* harmony export */   "aspectRatio": function() { return /* reexport safe */ _library_aspect_ratio__WEBPACK_IMPORTED_MODULE_15__["default"]; },
/* harmony export */   "atSymbol": function() { return /* reexport safe */ _library_at_symbol__WEBPACK_IMPORTED_MODULE_14__["default"]; },
/* harmony export */   "audio": function() { return /* reexport safe */ _library_audio__WEBPACK_IMPORTED_MODULE_16__["default"]; },
/* harmony export */   "backup": function() { return /* reexport safe */ _library_backup__WEBPACK_IMPORTED_MODULE_17__["default"]; },
/* harmony export */   "blockDefault": function() { return /* reexport safe */ _library_block_default__WEBPACK_IMPORTED_MODULE_18__["default"]; },
/* harmony export */   "blockTable": function() { return /* reexport safe */ _library_block_table__WEBPACK_IMPORTED_MODULE_19__["default"]; },
/* harmony export */   "box": function() { return /* reexport safe */ _library_box__WEBPACK_IMPORTED_MODULE_20__["default"]; },
/* harmony export */   "brush": function() { return /* reexport safe */ _library_brush__WEBPACK_IMPORTED_MODULE_21__["default"]; },
/* harmony export */   "bug": function() { return /* reexport safe */ _library_bug__WEBPACK_IMPORTED_MODULE_22__["default"]; },
/* harmony export */   "button": function() { return /* reexport safe */ _library_button__WEBPACK_IMPORTED_MODULE_23__["default"]; },
/* harmony export */   "buttons": function() { return /* reexport safe */ _library_buttons__WEBPACK_IMPORTED_MODULE_24__["default"]; },
/* harmony export */   "calendar": function() { return /* reexport safe */ _library_calendar__WEBPACK_IMPORTED_MODULE_25__["default"]; },
/* harmony export */   "cancelCircleFilled": function() { return /* reexport safe */ _library_cancel_circle_filled__WEBPACK_IMPORTED_MODULE_26__["default"]; },
/* harmony export */   "capturePhoto": function() { return /* reexport safe */ _library_capture_photo__WEBPACK_IMPORTED_MODULE_27__["default"]; },
/* harmony export */   "captureVideo": function() { return /* reexport safe */ _library_capture_video__WEBPACK_IMPORTED_MODULE_28__["default"]; },
/* harmony export */   "category": function() { return /* reexport safe */ _library_category__WEBPACK_IMPORTED_MODULE_29__["default"]; },
/* harmony export */   "chartBar": function() { return /* reexport safe */ _library_chart_bar__WEBPACK_IMPORTED_MODULE_30__["default"]; },
/* harmony export */   "check": function() { return /* reexport safe */ _library_check__WEBPACK_IMPORTED_MODULE_31__["default"]; },
/* harmony export */   "chevronDown": function() { return /* reexport safe */ _library_chevron_down__WEBPACK_IMPORTED_MODULE_32__["default"]; },
/* harmony export */   "chevronLeft": function() { return /* reexport safe */ _library_chevron_left__WEBPACK_IMPORTED_MODULE_33__["default"]; },
/* harmony export */   "chevronRight": function() { return /* reexport safe */ _library_chevron_right__WEBPACK_IMPORTED_MODULE_34__["default"]; },
/* harmony export */   "chevronRightSmall": function() { return /* reexport safe */ _library_chevron_right_small__WEBPACK_IMPORTED_MODULE_35__["default"]; },
/* harmony export */   "chevronUp": function() { return /* reexport safe */ _library_chevron_up__WEBPACK_IMPORTED_MODULE_36__["default"]; },
/* harmony export */   "classic": function() { return /* reexport safe */ _library_classic__WEBPACK_IMPORTED_MODULE_37__["default"]; },
/* harmony export */   "close": function() { return /* reexport safe */ _library_close__WEBPACK_IMPORTED_MODULE_38__["default"]; },
/* harmony export */   "closeSmall": function() { return /* reexport safe */ _library_close_small__WEBPACK_IMPORTED_MODULE_39__["default"]; },
/* harmony export */   "cloud": function() { return /* reexport safe */ _library_cloud__WEBPACK_IMPORTED_MODULE_41__["default"]; },
/* harmony export */   "cloudUpload": function() { return /* reexport safe */ _library_cloud_upload__WEBPACK_IMPORTED_MODULE_40__["default"]; },
/* harmony export */   "code": function() { return /* reexport safe */ _library_code__WEBPACK_IMPORTED_MODULE_42__["default"]; },
/* harmony export */   "cog": function() { return /* reexport safe */ _library_cog__WEBPACK_IMPORTED_MODULE_43__["default"]; },
/* harmony export */   "color": function() { return /* reexport safe */ _library_color__WEBPACK_IMPORTED_MODULE_44__["default"]; },
/* harmony export */   "column": function() { return /* reexport safe */ _library_column__WEBPACK_IMPORTED_MODULE_45__["default"]; },
/* harmony export */   "columns": function() { return /* reexport safe */ _library_columns__WEBPACK_IMPORTED_MODULE_46__["default"]; },
/* harmony export */   "comment": function() { return /* reexport safe */ _library_comment__WEBPACK_IMPORTED_MODULE_47__["default"]; },
/* harmony export */   "commentAuthorAvatar": function() { return /* reexport safe */ _library_comment_author_avatar__WEBPACK_IMPORTED_MODULE_48__["default"]; },
/* harmony export */   "commentAuthorName": function() { return /* reexport safe */ _library_comment_author_name__WEBPACK_IMPORTED_MODULE_49__["default"]; },
/* harmony export */   "commentContent": function() { return /* reexport safe */ _library_comment_content__WEBPACK_IMPORTED_MODULE_50__["default"]; },
/* harmony export */   "commentEditLink": function() { return /* reexport safe */ _library_comment_edit_link__WEBPACK_IMPORTED_MODULE_52__["default"]; },
/* harmony export */   "commentReplyLink": function() { return /* reexport safe */ _library_comment_reply_link__WEBPACK_IMPORTED_MODULE_51__["default"]; },
/* harmony export */   "cover": function() { return /* reexport safe */ _library_cover__WEBPACK_IMPORTED_MODULE_53__["default"]; },
/* harmony export */   "create": function() { return /* reexport safe */ _library_create__WEBPACK_IMPORTED_MODULE_54__["default"]; },
/* harmony export */   "crop": function() { return /* reexport safe */ _library_crop__WEBPACK_IMPORTED_MODULE_55__["default"]; },
/* harmony export */   "currencyDollar": function() { return /* reexport safe */ _library_currency_dollar__WEBPACK_IMPORTED_MODULE_56__["default"]; },
/* harmony export */   "currencyEuro": function() { return /* reexport safe */ _library_currency_euro__WEBPACK_IMPORTED_MODULE_57__["default"]; },
/* harmony export */   "currencyPound": function() { return /* reexport safe */ _library_currency_pound__WEBPACK_IMPORTED_MODULE_58__["default"]; },
/* harmony export */   "customLink": function() { return /* reexport safe */ _library_custom_link__WEBPACK_IMPORTED_MODULE_135__["default"]; },
/* harmony export */   "customPostType": function() { return /* reexport safe */ _library_custom_post_type__WEBPACK_IMPORTED_MODULE_59__["default"]; },
/* harmony export */   "desktop": function() { return /* reexport safe */ _library_desktop__WEBPACK_IMPORTED_MODULE_60__["default"]; },
/* harmony export */   "download": function() { return /* reexport safe */ _library_download__WEBPACK_IMPORTED_MODULE_62__["default"]; },
/* harmony export */   "dragHandle": function() { return /* reexport safe */ _library_drag_handle__WEBPACK_IMPORTED_MODULE_61__["default"]; },
/* harmony export */   "edit": function() { return /* reexport safe */ _library_edit__WEBPACK_IMPORTED_MODULE_63__["default"]; },
/* harmony export */   "external": function() { return /* reexport safe */ _library_external__WEBPACK_IMPORTED_MODULE_64__["default"]; },
/* harmony export */   "file": function() { return /* reexport safe */ _library_file__WEBPACK_IMPORTED_MODULE_65__["default"]; },
/* harmony export */   "flipHorizontal": function() { return /* reexport safe */ _library_flip_horizontal__WEBPACK_IMPORTED_MODULE_66__["default"]; },
/* harmony export */   "flipVertical": function() { return /* reexport safe */ _library_flip_vertical__WEBPACK_IMPORTED_MODULE_67__["default"]; },
/* harmony export */   "footer": function() { return /* reexport safe */ _library_footer__WEBPACK_IMPORTED_MODULE_217__["default"]; },
/* harmony export */   "formatBold": function() { return /* reexport safe */ _library_format_bold__WEBPACK_IMPORTED_MODULE_68__["default"]; },
/* harmony export */   "formatCapitalize": function() { return /* reexport safe */ _library_format_capitalize__WEBPACK_IMPORTED_MODULE_69__["default"]; },
/* harmony export */   "formatIndent": function() { return /* reexport safe */ _library_format_indent__WEBPACK_IMPORTED_MODULE_70__["default"]; },
/* harmony export */   "formatIndentRTL": function() { return /* reexport safe */ _library_format_indent_rtl__WEBPACK_IMPORTED_MODULE_71__["default"]; },
/* harmony export */   "formatItalic": function() { return /* reexport safe */ _library_format_italic__WEBPACK_IMPORTED_MODULE_72__["default"]; },
/* harmony export */   "formatListBullets": function() { return /* reexport safe */ _library_format_list_bullets__WEBPACK_IMPORTED_MODULE_73__["default"]; },
/* harmony export */   "formatListBulletsRTL": function() { return /* reexport safe */ _library_format_list_bullets_rtl__WEBPACK_IMPORTED_MODULE_74__["default"]; },
/* harmony export */   "formatListNumbered": function() { return /* reexport safe */ _library_format_list_numbered__WEBPACK_IMPORTED_MODULE_75__["default"]; },
/* harmony export */   "formatListNumberedRTL": function() { return /* reexport safe */ _library_format_list_numbered_rtl__WEBPACK_IMPORTED_MODULE_76__["default"]; },
/* harmony export */   "formatLowercase": function() { return /* reexport safe */ _library_format_lowercase__WEBPACK_IMPORTED_MODULE_78__["default"]; },
/* harmony export */   "formatLtr": function() { return /* reexport safe */ _library_format_ltr__WEBPACK_IMPORTED_MODULE_77__["default"]; },
/* harmony export */   "formatOutdent": function() { return /* reexport safe */ _library_format_outdent__WEBPACK_IMPORTED_MODULE_79__["default"]; },
/* harmony export */   "formatOutdentRTL": function() { return /* reexport safe */ _library_format_outdent_rtl__WEBPACK_IMPORTED_MODULE_80__["default"]; },
/* harmony export */   "formatRtl": function() { return /* reexport safe */ _library_format_rtl__WEBPACK_IMPORTED_MODULE_81__["default"]; },
/* harmony export */   "formatStrikethrough": function() { return /* reexport safe */ _library_format_strikethrough__WEBPACK_IMPORTED_MODULE_82__["default"]; },
/* harmony export */   "formatUnderline": function() { return /* reexport safe */ _library_format_underline__WEBPACK_IMPORTED_MODULE_83__["default"]; },
/* harmony export */   "formatUppercase": function() { return /* reexport safe */ _library_format_uppercase__WEBPACK_IMPORTED_MODULE_84__["default"]; },
/* harmony export */   "fullscreen": function() { return /* reexport safe */ _library_fullscreen__WEBPACK_IMPORTED_MODULE_85__["default"]; },
/* harmony export */   "gallery": function() { return /* reexport safe */ _library_gallery__WEBPACK_IMPORTED_MODULE_86__["default"]; },
/* harmony export */   "globe": function() { return /* reexport safe */ _library_globe__WEBPACK_IMPORTED_MODULE_87__["default"]; },
/* harmony export */   "grid": function() { return /* reexport safe */ _library_grid__WEBPACK_IMPORTED_MODULE_88__["default"]; },
/* harmony export */   "group": function() { return /* reexport safe */ _library_group__WEBPACK_IMPORTED_MODULE_89__["default"]; },
/* harmony export */   "handle": function() { return /* reexport safe */ _library_handle__WEBPACK_IMPORTED_MODULE_90__["default"]; },
/* harmony export */   "header": function() { return /* reexport safe */ _library_header__WEBPACK_IMPORTED_MODULE_218__["default"]; },
/* harmony export */   "heading": function() { return /* reexport safe */ _library_heading__WEBPACK_IMPORTED_MODULE_91__["default"]; },
/* harmony export */   "help": function() { return /* reexport safe */ _library_help__WEBPACK_IMPORTED_MODULE_92__["default"]; },
/* harmony export */   "helpFilled": function() { return /* reexport safe */ _library_help_filled__WEBPACK_IMPORTED_MODULE_93__["default"]; },
/* harmony export */   "home": function() { return /* reexport safe */ _library_home__WEBPACK_IMPORTED_MODULE_96__["default"]; },
/* harmony export */   "html": function() { return /* reexport safe */ _library_html__WEBPACK_IMPORTED_MODULE_97__["default"]; },
/* harmony export */   "image": function() { return /* reexport safe */ _library_image__WEBPACK_IMPORTED_MODULE_98__["default"]; },
/* harmony export */   "inbox": function() { return /* reexport safe */ _library_inbox__WEBPACK_IMPORTED_MODULE_94__["default"]; },
/* harmony export */   "info": function() { return /* reexport safe */ _library_info__WEBPACK_IMPORTED_MODULE_99__["default"]; },
/* harmony export */   "insertAfter": function() { return /* reexport safe */ _library_insert_after__WEBPACK_IMPORTED_MODULE_100__["default"]; },
/* harmony export */   "insertBefore": function() { return /* reexport safe */ _library_insert_before__WEBPACK_IMPORTED_MODULE_101__["default"]; },
/* harmony export */   "institution": function() { return /* reexport safe */ _library_institution__WEBPACK_IMPORTED_MODULE_95__["default"]; },
/* harmony export */   "justifyCenter": function() { return /* reexport safe */ _library_justify_center__WEBPACK_IMPORTED_MODULE_103__["default"]; },
/* harmony export */   "justifyLeft": function() { return /* reexport safe */ _library_justify_left__WEBPACK_IMPORTED_MODULE_102__["default"]; },
/* harmony export */   "justifyRight": function() { return /* reexport safe */ _library_justify_right__WEBPACK_IMPORTED_MODULE_104__["default"]; },
/* harmony export */   "justifySpaceBetween": function() { return /* reexport safe */ _library_justify_space_between__WEBPACK_IMPORTED_MODULE_105__["default"]; },
/* harmony export */   "key": function() { return /* reexport safe */ _library_key__WEBPACK_IMPORTED_MODULE_106__["default"]; },
/* harmony export */   "keyboardClose": function() { return /* reexport safe */ _library_keyboard_close__WEBPACK_IMPORTED_MODULE_107__["default"]; },
/* harmony export */   "keyboardReturn": function() { return /* reexport safe */ _library_keyboard_return__WEBPACK_IMPORTED_MODULE_108__["default"]; },
/* harmony export */   "layout": function() { return /* reexport safe */ _library_layout__WEBPACK_IMPORTED_MODULE_109__["default"]; },
/* harmony export */   "lifesaver": function() { return /* reexport safe */ _library_lifesaver__WEBPACK_IMPORTED_MODULE_110__["default"]; },
/* harmony export */   "lineDashed": function() { return /* reexport safe */ _library_line_dashed__WEBPACK_IMPORTED_MODULE_111__["default"]; },
/* harmony export */   "lineDotted": function() { return /* reexport safe */ _library_line_dotted__WEBPACK_IMPORTED_MODULE_112__["default"]; },
/* harmony export */   "lineSolid": function() { return /* reexport safe */ _library_line_solid__WEBPACK_IMPORTED_MODULE_113__["default"]; },
/* harmony export */   "link": function() { return /* reexport safe */ _library_link__WEBPACK_IMPORTED_MODULE_114__["default"]; },
/* harmony export */   "linkOff": function() { return /* reexport safe */ _library_link_off__WEBPACK_IMPORTED_MODULE_115__["default"]; },
/* harmony export */   "list": function() { return /* reexport safe */ _library_list__WEBPACK_IMPORTED_MODULE_116__["default"]; },
/* harmony export */   "listView": function() { return /* reexport safe */ _library_list_view__WEBPACK_IMPORTED_MODULE_117__["default"]; },
/* harmony export */   "lock": function() { return /* reexport safe */ _library_lock__WEBPACK_IMPORTED_MODULE_118__["default"]; },
/* harmony export */   "login": function() { return /* reexport safe */ _library_login__WEBPACK_IMPORTED_MODULE_119__["default"]; },
/* harmony export */   "loop": function() { return /* reexport safe */ _library_loop__WEBPACK_IMPORTED_MODULE_120__["default"]; },
/* harmony export */   "mapMarker": function() { return /* reexport safe */ _library_map_marker__WEBPACK_IMPORTED_MODULE_121__["default"]; },
/* harmony export */   "media": function() { return /* reexport safe */ _library_media__WEBPACK_IMPORTED_MODULE_122__["default"]; },
/* harmony export */   "mediaAndText": function() { return /* reexport safe */ _library_media_and_text__WEBPACK_IMPORTED_MODULE_123__["default"]; },
/* harmony export */   "megaphone": function() { return /* reexport safe */ _library_megaphone__WEBPACK_IMPORTED_MODULE_124__["default"]; },
/* harmony export */   "menu": function() { return /* reexport safe */ _library_menu__WEBPACK_IMPORTED_MODULE_125__["default"]; },
/* harmony export */   "mobile": function() { return /* reexport safe */ _library_mobile__WEBPACK_IMPORTED_MODULE_126__["default"]; },
/* harmony export */   "more": function() { return /* reexport safe */ _library_more__WEBPACK_IMPORTED_MODULE_127__["default"]; },
/* harmony export */   "moreHorizontal": function() { return /* reexport safe */ _library_more_horizontal__WEBPACK_IMPORTED_MODULE_128__["default"]; },
/* harmony export */   "moreHorizontalMobile": function() { return /* reexport safe */ _library_more_horizontal_mobile__WEBPACK_IMPORTED_MODULE_129__["default"]; },
/* harmony export */   "moreVertical": function() { return /* reexport safe */ _library_more_vertical__WEBPACK_IMPORTED_MODULE_130__["default"]; },
/* harmony export */   "moveTo": function() { return /* reexport safe */ _library_move_to__WEBPACK_IMPORTED_MODULE_131__["default"]; },
/* harmony export */   "navigation": function() { return /* reexport safe */ _library_navigation__WEBPACK_IMPORTED_MODULE_132__["default"]; },
/* harmony export */   "next": function() { return /* reexport safe */ _library_next__WEBPACK_IMPORTED_MODULE_165__["default"]; },
/* harmony export */   "overlayText": function() { return /* reexport safe */ _library_overlay_text__WEBPACK_IMPORTED_MODULE_133__["default"]; },
/* harmony export */   "page": function() { return /* reexport safe */ _library_page__WEBPACK_IMPORTED_MODULE_136__["default"]; },
/* harmony export */   "pageBreak": function() { return /* reexport safe */ _library_page_break__WEBPACK_IMPORTED_MODULE_134__["default"]; },
/* harmony export */   "pages": function() { return /* reexport safe */ _library_pages__WEBPACK_IMPORTED_MODULE_137__["default"]; },
/* harmony export */   "paragraph": function() { return /* reexport safe */ _library_paragraph__WEBPACK_IMPORTED_MODULE_138__["default"]; },
/* harmony export */   "payment": function() { return /* reexport safe */ _library_payment__WEBPACK_IMPORTED_MODULE_139__["default"]; },
/* harmony export */   "pencil": function() { return /* reexport safe */ _library_pencil__WEBPACK_IMPORTED_MODULE_144__["default"]; },
/* harmony export */   "people": function() { return /* reexport safe */ _library_people__WEBPACK_IMPORTED_MODULE_145__["default"]; },
/* harmony export */   "percent": function() { return /* reexport safe */ _library_percent__WEBPACK_IMPORTED_MODULE_140__["default"]; },
/* harmony export */   "pin": function() { return /* reexport safe */ _library_pin__WEBPACK_IMPORTED_MODULE_146__["default"]; },
/* harmony export */   "plugins": function() { return /* reexport safe */ _library_plugins__WEBPACK_IMPORTED_MODULE_147__["default"]; },
/* harmony export */   "plus": function() { return /* reexport safe */ _library_plus__WEBPACK_IMPORTED_MODULE_150__["default"]; },
/* harmony export */   "plusCircle": function() { return /* reexport safe */ _library_plus_circle__WEBPACK_IMPORTED_MODULE_149__["default"]; },
/* harmony export */   "plusCircleFilled": function() { return /* reexport safe */ _library_plus_circle_filled__WEBPACK_IMPORTED_MODULE_148__["default"]; },
/* harmony export */   "positionCenter": function() { return /* reexport safe */ _library_position_center__WEBPACK_IMPORTED_MODULE_141__["default"]; },
/* harmony export */   "positionLeft": function() { return /* reexport safe */ _library_position_left__WEBPACK_IMPORTED_MODULE_142__["default"]; },
/* harmony export */   "positionRight": function() { return /* reexport safe */ _library_position_right__WEBPACK_IMPORTED_MODULE_143__["default"]; },
/* harmony export */   "post": function() { return /* reexport safe */ _library_post__WEBPACK_IMPORTED_MODULE_151__["default"]; },
/* harmony export */   "postAuthor": function() { return /* reexport safe */ _library_post_author__WEBPACK_IMPORTED_MODULE_152__["default"]; },
/* harmony export */   "postCategories": function() { return /* reexport safe */ _library_post_categories__WEBPACK_IMPORTED_MODULE_153__["default"]; },
/* harmony export */   "postComments": function() { return /* reexport safe */ _library_post_comments__WEBPACK_IMPORTED_MODULE_155__["default"]; },
/* harmony export */   "postCommentsCount": function() { return /* reexport safe */ _library_post_comments_count__WEBPACK_IMPORTED_MODULE_156__["default"]; },
/* harmony export */   "postCommentsForm": function() { return /* reexport safe */ _library_post_comments_form__WEBPACK_IMPORTED_MODULE_157__["default"]; },
/* harmony export */   "postContent": function() { return /* reexport safe */ _library_post_content__WEBPACK_IMPORTED_MODULE_154__["default"]; },
/* harmony export */   "postDate": function() { return /* reexport safe */ _library_post_date__WEBPACK_IMPORTED_MODULE_158__["default"]; },
/* harmony export */   "postExcerpt": function() { return /* reexport safe */ _library_post_excerpt__WEBPACK_IMPORTED_MODULE_159__["default"]; },
/* harmony export */   "postFeaturedImage": function() { return /* reexport safe */ _library_post_featured_image__WEBPACK_IMPORTED_MODULE_160__["default"]; },
/* harmony export */   "postList": function() { return /* reexport safe */ _library_post_list__WEBPACK_IMPORTED_MODULE_161__["default"]; },
/* harmony export */   "postTerms": function() { return /* reexport safe */ _library_post_terms__WEBPACK_IMPORTED_MODULE_163__["default"]; },
/* harmony export */   "postTitle": function() { return /* reexport safe */ _library_post_title__WEBPACK_IMPORTED_MODULE_162__["default"]; },
/* harmony export */   "preformatted": function() { return /* reexport safe */ _library_preformatted__WEBPACK_IMPORTED_MODULE_166__["default"]; },
/* harmony export */   "previous": function() { return /* reexport safe */ _library_previous__WEBPACK_IMPORTED_MODULE_164__["default"]; },
/* harmony export */   "pullLeft": function() { return /* reexport safe */ _library_pull_left__WEBPACK_IMPORTED_MODULE_167__["default"]; },
/* harmony export */   "pullRight": function() { return /* reexport safe */ _library_pull_right__WEBPACK_IMPORTED_MODULE_168__["default"]; },
/* harmony export */   "pullquote": function() { return /* reexport safe */ _library_pullquote__WEBPACK_IMPORTED_MODULE_169__["default"]; },
/* harmony export */   "queryPagination": function() { return /* reexport safe */ _library_query_pagination__WEBPACK_IMPORTED_MODULE_170__["default"]; },
/* harmony export */   "queryPaginationNext": function() { return /* reexport safe */ _library_query_pagination_next__WEBPACK_IMPORTED_MODULE_171__["default"]; },
/* harmony export */   "queryPaginationNumbers": function() { return /* reexport safe */ _library_query_pagination_numbers__WEBPACK_IMPORTED_MODULE_172__["default"]; },
/* harmony export */   "queryPaginationPrevious": function() { return /* reexport safe */ _library_query_pagination_previous__WEBPACK_IMPORTED_MODULE_173__["default"]; },
/* harmony export */   "queryTitle": function() { return /* reexport safe */ _library_query_title__WEBPACK_IMPORTED_MODULE_174__["default"]; },
/* harmony export */   "quote": function() { return /* reexport safe */ _library_quote__WEBPACK_IMPORTED_MODULE_175__["default"]; },
/* harmony export */   "receipt": function() { return /* reexport safe */ _library_receipt__WEBPACK_IMPORTED_MODULE_176__["default"]; },
/* harmony export */   "redo": function() { return /* reexport safe */ _library_redo__WEBPACK_IMPORTED_MODULE_177__["default"]; },
/* harmony export */   "removeBug": function() { return /* reexport safe */ _library_remove_bug__WEBPACK_IMPORTED_MODULE_178__["default"]; },
/* harmony export */   "removeSubmenu": function() { return /* reexport safe */ _library_remove_submenu__WEBPACK_IMPORTED_MODULE_179__["default"]; },
/* harmony export */   "replace": function() { return /* reexport safe */ _library_replace__WEBPACK_IMPORTED_MODULE_180__["default"]; },
/* harmony export */   "reset": function() { return /* reexport safe */ _library_reset__WEBPACK_IMPORTED_MODULE_181__["default"]; },
/* harmony export */   "resizeCornerNE": function() { return /* reexport safe */ _library_resize_corner_n_e__WEBPACK_IMPORTED_MODULE_182__["default"]; },
/* harmony export */   "reusableBlock": function() { return /* reexport safe */ _library_reusable_block__WEBPACK_IMPORTED_MODULE_183__["default"]; },
/* harmony export */   "rotateLeft": function() { return /* reexport safe */ _library_rotate_left__WEBPACK_IMPORTED_MODULE_185__["default"]; },
/* harmony export */   "rotateRight": function() { return /* reexport safe */ _library_rotate_right__WEBPACK_IMPORTED_MODULE_186__["default"]; },
/* harmony export */   "rss": function() { return /* reexport safe */ _library_rss__WEBPACK_IMPORTED_MODULE_187__["default"]; },
/* harmony export */   "search": function() { return /* reexport safe */ _library_search__WEBPACK_IMPORTED_MODULE_188__["default"]; },
/* harmony export */   "separator": function() { return /* reexport safe */ _library_separator__WEBPACK_IMPORTED_MODULE_189__["default"]; },
/* harmony export */   "settings": function() { return /* reexport safe */ _library_settings__WEBPACK_IMPORTED_MODULE_190__["default"]; },
/* harmony export */   "share": function() { return /* reexport safe */ _library_share__WEBPACK_IMPORTED_MODULE_191__["default"]; },
/* harmony export */   "shield": function() { return /* reexport safe */ _library_shield__WEBPACK_IMPORTED_MODULE_192__["default"]; },
/* harmony export */   "shipping": function() { return /* reexport safe */ _library_shipping__WEBPACK_IMPORTED_MODULE_202__["default"]; },
/* harmony export */   "shortcode": function() { return /* reexport safe */ _library_shortcode__WEBPACK_IMPORTED_MODULE_193__["default"]; },
/* harmony export */   "sidebar": function() { return /* reexport safe */ _library_sidebar__WEBPACK_IMPORTED_MODULE_219__["default"]; },
/* harmony export */   "siteLogo": function() { return /* reexport safe */ _library_site_logo__WEBPACK_IMPORTED_MODULE_194__["default"]; },
/* harmony export */   "stack": function() { return /* reexport safe */ _library_stack__WEBPACK_IMPORTED_MODULE_195__["default"]; },
/* harmony export */   "starEmpty": function() { return /* reexport safe */ _library_star_empty__WEBPACK_IMPORTED_MODULE_196__["default"]; },
/* harmony export */   "starFilled": function() { return /* reexport safe */ _library_star_filled__WEBPACK_IMPORTED_MODULE_197__["default"]; },
/* harmony export */   "starHalf": function() { return /* reexport safe */ _library_star_half__WEBPACK_IMPORTED_MODULE_198__["default"]; },
/* harmony export */   "store": function() { return /* reexport safe */ _library_store__WEBPACK_IMPORTED_MODULE_199__["default"]; },
/* harmony export */   "stretchFullWidth": function() { return /* reexport safe */ _library_stretch_full_width__WEBPACK_IMPORTED_MODULE_200__["default"]; },
/* harmony export */   "stretchWide": function() { return /* reexport safe */ _library_stretch_wide__WEBPACK_IMPORTED_MODULE_203__["default"]; },
/* harmony export */   "styles": function() { return /* reexport safe */ _library_styles__WEBPACK_IMPORTED_MODULE_201__["default"]; },
/* harmony export */   "subscript": function() { return /* reexport safe */ _library_subscript__WEBPACK_IMPORTED_MODULE_204__["default"]; },
/* harmony export */   "superscript": function() { return /* reexport safe */ _library_superscript__WEBPACK_IMPORTED_MODULE_205__["default"]; },
/* harmony export */   "swatch": function() { return /* reexport safe */ _library_swatch__WEBPACK_IMPORTED_MODULE_206__["default"]; },
/* harmony export */   "symbol": function() { return /* reexport safe */ _library_symbol__WEBPACK_IMPORTED_MODULE_184__["default"]; },
/* harmony export */   "symbolFilled": function() { return /* reexport safe */ _library_symbol_filled__WEBPACK_IMPORTED_MODULE_215__["default"]; },
/* harmony export */   "table": function() { return /* reexport safe */ _library_table__WEBPACK_IMPORTED_MODULE_213__["default"]; },
/* harmony export */   "tableColumnAfter": function() { return /* reexport safe */ _library_table_column_after__WEBPACK_IMPORTED_MODULE_207__["default"]; },
/* harmony export */   "tableColumnBefore": function() { return /* reexport safe */ _library_table_column_before__WEBPACK_IMPORTED_MODULE_208__["default"]; },
/* harmony export */   "tableColumnDelete": function() { return /* reexport safe */ _library_table_column_delete__WEBPACK_IMPORTED_MODULE_209__["default"]; },
/* harmony export */   "tableRowAfter": function() { return /* reexport safe */ _library_table_row_after__WEBPACK_IMPORTED_MODULE_210__["default"]; },
/* harmony export */   "tableRowBefore": function() { return /* reexport safe */ _library_table_row_before__WEBPACK_IMPORTED_MODULE_211__["default"]; },
/* harmony export */   "tableRowDelete": function() { return /* reexport safe */ _library_table_row_delete__WEBPACK_IMPORTED_MODULE_212__["default"]; },
/* harmony export */   "tablet": function() { return /* reexport safe */ _library_tablet__WEBPACK_IMPORTED_MODULE_221__["default"]; },
/* harmony export */   "tag": function() { return /* reexport safe */ _library_tag__WEBPACK_IMPORTED_MODULE_214__["default"]; },
/* harmony export */   "termDescription": function() { return /* reexport safe */ _library_term_description__WEBPACK_IMPORTED_MODULE_216__["default"]; },
/* harmony export */   "textColor": function() { return /* reexport safe */ _library_text_color__WEBPACK_IMPORTED_MODULE_220__["default"]; },
/* harmony export */   "tip": function() { return /* reexport safe */ _library_tip__WEBPACK_IMPORTED_MODULE_223__["default"]; },
/* harmony export */   "title": function() { return /* reexport safe */ _library_title__WEBPACK_IMPORTED_MODULE_222__["default"]; },
/* harmony export */   "tool": function() { return /* reexport safe */ _library_tool__WEBPACK_IMPORTED_MODULE_224__["default"]; },
/* harmony export */   "trash": function() { return /* reexport safe */ _library_trash__WEBPACK_IMPORTED_MODULE_225__["default"]; },
/* harmony export */   "trendingDown": function() { return /* reexport safe */ _library_trending_down__WEBPACK_IMPORTED_MODULE_226__["default"]; },
/* harmony export */   "trendingUp": function() { return /* reexport safe */ _library_trending_up__WEBPACK_IMPORTED_MODULE_227__["default"]; },
/* harmony export */   "typography": function() { return /* reexport safe */ _library_typography__WEBPACK_IMPORTED_MODULE_228__["default"]; },
/* harmony export */   "undo": function() { return /* reexport safe */ _library_undo__WEBPACK_IMPORTED_MODULE_229__["default"]; },
/* harmony export */   "ungroup": function() { return /* reexport safe */ _library_ungroup__WEBPACK_IMPORTED_MODULE_230__["default"]; },
/* harmony export */   "unlock": function() { return /* reexport safe */ _library_unlock__WEBPACK_IMPORTED_MODULE_231__["default"]; },
/* harmony export */   "update": function() { return /* reexport safe */ _library_update__WEBPACK_IMPORTED_MODULE_232__["default"]; },
/* harmony export */   "upload": function() { return /* reexport safe */ _library_upload__WEBPACK_IMPORTED_MODULE_233__["default"]; },
/* harmony export */   "verse": function() { return /* reexport safe */ _library_verse__WEBPACK_IMPORTED_MODULE_234__["default"]; },
/* harmony export */   "video": function() { return /* reexport safe */ _library_video__WEBPACK_IMPORTED_MODULE_235__["default"]; },
/* harmony export */   "warning": function() { return /* reexport safe */ _library_warning__WEBPACK_IMPORTED_MODULE_236__["default"]; },
/* harmony export */   "widget": function() { return /* reexport safe */ _library_widget__WEBPACK_IMPORTED_MODULE_237__["default"]; },
/* harmony export */   "wordpress": function() { return /* reexport safe */ _library_wordpress__WEBPACK_IMPORTED_MODULE_238__["default"]; }
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "../../node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var _library_add_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library/add-card */ "../../node_modules/@wordpress/icons/build-module/library/add-card.js");
/* harmony import */ var _library_add_submenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library/add-submenu */ "../../node_modules/@wordpress/icons/build-module/library/add-submenu.js");
/* harmony import */ var _library_align_center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./library/align-center */ "../../node_modules/@wordpress/icons/build-module/library/align-center.js");
/* harmony import */ var _library_align_justify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./library/align-justify */ "../../node_modules/@wordpress/icons/build-module/library/align-justify.js");
/* harmony import */ var _library_align_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./library/align-left */ "../../node_modules/@wordpress/icons/build-module/library/align-left.js");
/* harmony import */ var _library_align_none__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./library/align-none */ "../../node_modules/@wordpress/icons/build-module/library/align-none.js");
/* harmony import */ var _library_align_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./library/align-right */ "../../node_modules/@wordpress/icons/build-module/library/align-right.js");
/* harmony import */ var _library_archive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./library/archive */ "../../node_modules/@wordpress/icons/build-module/library/archive.js");
/* harmony import */ var _library_archive_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./library/archive-title */ "../../node_modules/@wordpress/icons/build-module/library/archive-title.js");
/* harmony import */ var _library_arrow_down__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./library/arrow-down */ "../../node_modules/@wordpress/icons/build-module/library/arrow-down.js");
/* harmony import */ var _library_arrow_left__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./library/arrow-left */ "../../node_modules/@wordpress/icons/build-module/library/arrow-left.js");
/* harmony import */ var _library_arrow_right__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./library/arrow-right */ "../../node_modules/@wordpress/icons/build-module/library/arrow-right.js");
/* harmony import */ var _library_arrow_up__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./library/arrow-up */ "../../node_modules/@wordpress/icons/build-module/library/arrow-up.js");
/* harmony import */ var _library_at_symbol__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./library/at-symbol */ "../../node_modules/@wordpress/icons/build-module/library/at-symbol.js");
/* harmony import */ var _library_aspect_ratio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./library/aspect-ratio */ "../../node_modules/@wordpress/icons/build-module/library/aspect-ratio.js");
/* harmony import */ var _library_audio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./library/audio */ "../../node_modules/@wordpress/icons/build-module/library/audio.js");
/* harmony import */ var _library_backup__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./library/backup */ "../../node_modules/@wordpress/icons/build-module/library/backup.js");
/* harmony import */ var _library_block_default__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./library/block-default */ "../../node_modules/@wordpress/icons/build-module/library/block-default.js");
/* harmony import */ var _library_block_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./library/block-table */ "../../node_modules/@wordpress/icons/build-module/library/block-table.js");
/* harmony import */ var _library_box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./library/box */ "../../node_modules/@wordpress/icons/build-module/library/box.js");
/* harmony import */ var _library_brush__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./library/brush */ "../../node_modules/@wordpress/icons/build-module/library/brush.js");
/* harmony import */ var _library_bug__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./library/bug */ "../../node_modules/@wordpress/icons/build-module/library/bug.js");
/* harmony import */ var _library_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./library/button */ "../../node_modules/@wordpress/icons/build-module/library/button.js");
/* harmony import */ var _library_buttons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./library/buttons */ "../../node_modules/@wordpress/icons/build-module/library/buttons.js");
/* harmony import */ var _library_calendar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./library/calendar */ "../../node_modules/@wordpress/icons/build-module/library/calendar.js");
/* harmony import */ var _library_cancel_circle_filled__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./library/cancel-circle-filled */ "../../node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js");
/* harmony import */ var _library_capture_photo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./library/capture-photo */ "../../node_modules/@wordpress/icons/build-module/library/capture-photo.js");
/* harmony import */ var _library_capture_video__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./library/capture-video */ "../../node_modules/@wordpress/icons/build-module/library/capture-video.js");
/* harmony import */ var _library_category__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./library/category */ "../../node_modules/@wordpress/icons/build-module/library/category.js");
/* harmony import */ var _library_chart_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./library/chart-bar */ "../../node_modules/@wordpress/icons/build-module/library/chart-bar.js");
/* harmony import */ var _library_check__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./library/check */ "../../node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _library_chevron_down__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./library/chevron-down */ "../../node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var _library_chevron_left__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./library/chevron-left */ "../../node_modules/@wordpress/icons/build-module/library/chevron-left.js");
/* harmony import */ var _library_chevron_right__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./library/chevron-right */ "../../node_modules/@wordpress/icons/build-module/library/chevron-right.js");
/* harmony import */ var _library_chevron_right_small__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./library/chevron-right-small */ "../../node_modules/@wordpress/icons/build-module/library/chevron-right-small.js");
/* harmony import */ var _library_chevron_up__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./library/chevron-up */ "../../node_modules/@wordpress/icons/build-module/library/chevron-up.js");
/* harmony import */ var _library_classic__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./library/classic */ "../../node_modules/@wordpress/icons/build-module/library/classic.js");
/* harmony import */ var _library_close__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./library/close */ "../../node_modules/@wordpress/icons/build-module/library/close.js");
/* harmony import */ var _library_close_small__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./library/close-small */ "../../node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _library_cloud_upload__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./library/cloud-upload */ "../../node_modules/@wordpress/icons/build-module/library/cloud-upload.js");
/* harmony import */ var _library_cloud__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./library/cloud */ "../../node_modules/@wordpress/icons/build-module/library/cloud.js");
/* harmony import */ var _library_code__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./library/code */ "../../node_modules/@wordpress/icons/build-module/library/code.js");
/* harmony import */ var _library_cog__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./library/cog */ "../../node_modules/@wordpress/icons/build-module/library/cog.js");
/* harmony import */ var _library_color__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./library/color */ "../../node_modules/@wordpress/icons/build-module/library/color.js");
/* harmony import */ var _library_column__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./library/column */ "../../node_modules/@wordpress/icons/build-module/library/column.js");
/* harmony import */ var _library_columns__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./library/columns */ "../../node_modules/@wordpress/icons/build-module/library/columns.js");
/* harmony import */ var _library_comment__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./library/comment */ "../../node_modules/@wordpress/icons/build-module/library/comment.js");
/* harmony import */ var _library_comment_author_avatar__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./library/comment-author-avatar */ "../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js");
/* harmony import */ var _library_comment_author_name__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./library/comment-author-name */ "../../node_modules/@wordpress/icons/build-module/library/comment-author-name.js");
/* harmony import */ var _library_comment_content__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./library/comment-content */ "../../node_modules/@wordpress/icons/build-module/library/comment-content.js");
/* harmony import */ var _library_comment_reply_link__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./library/comment-reply-link */ "../../node_modules/@wordpress/icons/build-module/library/comment-reply-link.js");
/* harmony import */ var _library_comment_edit_link__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./library/comment-edit-link */ "../../node_modules/@wordpress/icons/build-module/library/comment-edit-link.js");
/* harmony import */ var _library_cover__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./library/cover */ "../../node_modules/@wordpress/icons/build-module/library/cover.js");
/* harmony import */ var _library_create__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./library/create */ "../../node_modules/@wordpress/icons/build-module/library/create.js");
/* harmony import */ var _library_crop__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./library/crop */ "../../node_modules/@wordpress/icons/build-module/library/crop.js");
/* harmony import */ var _library_currency_dollar__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./library/currency-dollar */ "../../node_modules/@wordpress/icons/build-module/library/currency-dollar.js");
/* harmony import */ var _library_currency_euro__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./library/currency-euro */ "../../node_modules/@wordpress/icons/build-module/library/currency-euro.js");
/* harmony import */ var _library_currency_pound__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./library/currency-pound */ "../../node_modules/@wordpress/icons/build-module/library/currency-pound.js");
/* harmony import */ var _library_custom_post_type__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./library/custom-post-type */ "../../node_modules/@wordpress/icons/build-module/library/custom-post-type.js");
/* harmony import */ var _library_desktop__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./library/desktop */ "../../node_modules/@wordpress/icons/build-module/library/desktop.js");
/* harmony import */ var _library_drag_handle__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./library/drag-handle */ "../../node_modules/@wordpress/icons/build-module/library/drag-handle.js");
/* harmony import */ var _library_download__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./library/download */ "../../node_modules/@wordpress/icons/build-module/library/download.js");
/* harmony import */ var _library_edit__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./library/edit */ "../../node_modules/@wordpress/icons/build-module/library/edit.js");
/* harmony import */ var _library_external__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./library/external */ "../../node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _library_file__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./library/file */ "../../node_modules/@wordpress/icons/build-module/library/file.js");
/* harmony import */ var _library_flip_horizontal__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./library/flip-horizontal */ "../../node_modules/@wordpress/icons/build-module/library/flip-horizontal.js");
/* harmony import */ var _library_flip_vertical__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./library/flip-vertical */ "../../node_modules/@wordpress/icons/build-module/library/flip-vertical.js");
/* harmony import */ var _library_format_bold__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./library/format-bold */ "../../node_modules/@wordpress/icons/build-module/library/format-bold.js");
/* harmony import */ var _library_format_capitalize__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./library/format-capitalize */ "../../node_modules/@wordpress/icons/build-module/library/format-capitalize.js");
/* harmony import */ var _library_format_indent__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./library/format-indent */ "../../node_modules/@wordpress/icons/build-module/library/format-indent.js");
/* harmony import */ var _library_format_indent_rtl__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./library/format-indent-rtl */ "../../node_modules/@wordpress/icons/build-module/library/format-indent-rtl.js");
/* harmony import */ var _library_format_italic__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./library/format-italic */ "../../node_modules/@wordpress/icons/build-module/library/format-italic.js");
/* harmony import */ var _library_format_list_bullets__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./library/format-list-bullets */ "../../node_modules/@wordpress/icons/build-module/library/format-list-bullets.js");
/* harmony import */ var _library_format_list_bullets_rtl__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./library/format-list-bullets-rtl */ "../../node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js");
/* harmony import */ var _library_format_list_numbered__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./library/format-list-numbered */ "../../node_modules/@wordpress/icons/build-module/library/format-list-numbered.js");
/* harmony import */ var _library_format_list_numbered_rtl__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./library/format-list-numbered-rtl */ "../../node_modules/@wordpress/icons/build-module/library/format-list-numbered-rtl.js");
/* harmony import */ var _library_format_ltr__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./library/format-ltr */ "../../node_modules/@wordpress/icons/build-module/library/format-ltr.js");
/* harmony import */ var _library_format_lowercase__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./library/format-lowercase */ "../../node_modules/@wordpress/icons/build-module/library/format-lowercase.js");
/* harmony import */ var _library_format_outdent__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./library/format-outdent */ "../../node_modules/@wordpress/icons/build-module/library/format-outdent.js");
/* harmony import */ var _library_format_outdent_rtl__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./library/format-outdent-rtl */ "../../node_modules/@wordpress/icons/build-module/library/format-outdent-rtl.js");
/* harmony import */ var _library_format_rtl__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./library/format-rtl */ "../../node_modules/@wordpress/icons/build-module/library/format-rtl.js");
/* harmony import */ var _library_format_strikethrough__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./library/format-strikethrough */ "../../node_modules/@wordpress/icons/build-module/library/format-strikethrough.js");
/* harmony import */ var _library_format_underline__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./library/format-underline */ "../../node_modules/@wordpress/icons/build-module/library/format-underline.js");
/* harmony import */ var _library_format_uppercase__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./library/format-uppercase */ "../../node_modules/@wordpress/icons/build-module/library/format-uppercase.js");
/* harmony import */ var _library_fullscreen__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./library/fullscreen */ "../../node_modules/@wordpress/icons/build-module/library/fullscreen.js");
/* harmony import */ var _library_gallery__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./library/gallery */ "../../node_modules/@wordpress/icons/build-module/library/gallery.js");
/* harmony import */ var _library_globe__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./library/globe */ "../../node_modules/@wordpress/icons/build-module/library/globe.js");
/* harmony import */ var _library_grid__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./library/grid */ "../../node_modules/@wordpress/icons/build-module/library/grid.js");
/* harmony import */ var _library_group__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./library/group */ "../../node_modules/@wordpress/icons/build-module/library/group.js");
/* harmony import */ var _library_handle__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./library/handle */ "../../node_modules/@wordpress/icons/build-module/library/handle.js");
/* harmony import */ var _library_heading__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./library/heading */ "../../node_modules/@wordpress/icons/build-module/library/heading.js");
/* harmony import */ var _library_help__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./library/help */ "../../node_modules/@wordpress/icons/build-module/library/help.js");
/* harmony import */ var _library_help_filled__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./library/help-filled */ "../../node_modules/@wordpress/icons/build-module/library/help-filled.js");
/* harmony import */ var _library_inbox__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./library/inbox */ "../../node_modules/@wordpress/icons/build-module/library/inbox.js");
/* harmony import */ var _library_institution__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./library/institution */ "../../node_modules/@wordpress/icons/build-module/library/institution.js");
/* harmony import */ var _library_home__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./library/home */ "../../node_modules/@wordpress/icons/build-module/library/home.js");
/* harmony import */ var _library_html__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./library/html */ "../../node_modules/@wordpress/icons/build-module/library/html.js");
/* harmony import */ var _library_image__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./library/image */ "../../node_modules/@wordpress/icons/build-module/library/image.js");
/* harmony import */ var _library_info__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./library/info */ "../../node_modules/@wordpress/icons/build-module/library/info.js");
/* harmony import */ var _library_insert_after__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./library/insert-after */ "../../node_modules/@wordpress/icons/build-module/library/insert-after.js");
/* harmony import */ var _library_insert_before__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./library/insert-before */ "../../node_modules/@wordpress/icons/build-module/library/insert-before.js");
/* harmony import */ var _library_justify_left__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./library/justify-left */ "../../node_modules/@wordpress/icons/build-module/library/justify-left.js");
/* harmony import */ var _library_justify_center__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./library/justify-center */ "../../node_modules/@wordpress/icons/build-module/library/justify-center.js");
/* harmony import */ var _library_justify_right__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./library/justify-right */ "../../node_modules/@wordpress/icons/build-module/library/justify-right.js");
/* harmony import */ var _library_justify_space_between__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./library/justify-space-between */ "../../node_modules/@wordpress/icons/build-module/library/justify-space-between.js");
/* harmony import */ var _library_key__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./library/key */ "../../node_modules/@wordpress/icons/build-module/library/key.js");
/* harmony import */ var _library_keyboard_close__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./library/keyboard-close */ "../../node_modules/@wordpress/icons/build-module/library/keyboard-close.js");
/* harmony import */ var _library_keyboard_return__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./library/keyboard-return */ "../../node_modules/@wordpress/icons/build-module/library/keyboard-return.js");
/* harmony import */ var _library_layout__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./library/layout */ "../../node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _library_lifesaver__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./library/lifesaver */ "../../node_modules/@wordpress/icons/build-module/library/lifesaver.js");
/* harmony import */ var _library_line_dashed__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./library/line-dashed */ "../../node_modules/@wordpress/icons/build-module/library/line-dashed.js");
/* harmony import */ var _library_line_dotted__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./library/line-dotted */ "../../node_modules/@wordpress/icons/build-module/library/line-dotted.js");
/* harmony import */ var _library_line_solid__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./library/line-solid */ "../../node_modules/@wordpress/icons/build-module/library/line-solid.js");
/* harmony import */ var _library_link__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./library/link */ "../../node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _library_link_off__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./library/link-off */ "../../node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony import */ var _library_list__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./library/list */ "../../node_modules/@wordpress/icons/build-module/library/list.js");
/* harmony import */ var _library_list_view__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./library/list-view */ "../../node_modules/@wordpress/icons/build-module/library/list-view.js");
/* harmony import */ var _library_lock__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./library/lock */ "../../node_modules/@wordpress/icons/build-module/library/lock.js");
/* harmony import */ var _library_login__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./library/login */ "../../node_modules/@wordpress/icons/build-module/library/login.js");
/* harmony import */ var _library_loop__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./library/loop */ "../../node_modules/@wordpress/icons/build-module/library/loop.js");
/* harmony import */ var _library_map_marker__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./library/map-marker */ "../../node_modules/@wordpress/icons/build-module/library/map-marker.js");
/* harmony import */ var _library_media__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./library/media */ "../../node_modules/@wordpress/icons/build-module/library/media.js");
/* harmony import */ var _library_media_and_text__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./library/media-and-text */ "../../node_modules/@wordpress/icons/build-module/library/media-and-text.js");
/* harmony import */ var _library_megaphone__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./library/megaphone */ "../../node_modules/@wordpress/icons/build-module/library/megaphone.js");
/* harmony import */ var _library_menu__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./library/menu */ "../../node_modules/@wordpress/icons/build-module/library/menu.js");
/* harmony import */ var _library_mobile__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./library/mobile */ "../../node_modules/@wordpress/icons/build-module/library/mobile.js");
/* harmony import */ var _library_more__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./library/more */ "../../node_modules/@wordpress/icons/build-module/library/more.js");
/* harmony import */ var _library_more_horizontal__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./library/more-horizontal */ "../../node_modules/@wordpress/icons/build-module/library/more-horizontal.js");
/* harmony import */ var _library_more_horizontal_mobile__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./library/more-horizontal-mobile */ "../../node_modules/@wordpress/icons/build-module/library/more-horizontal-mobile.js");
/* harmony import */ var _library_more_vertical__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./library/more-vertical */ "../../node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony import */ var _library_move_to__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./library/move-to */ "../../node_modules/@wordpress/icons/build-module/library/move-to.js");
/* harmony import */ var _library_navigation__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./library/navigation */ "../../node_modules/@wordpress/icons/build-module/library/navigation.js");
/* harmony import */ var _library_overlay_text__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./library/overlay-text */ "../../node_modules/@wordpress/icons/build-module/library/overlay-text.js");
/* harmony import */ var _library_page_break__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./library/page-break */ "../../node_modules/@wordpress/icons/build-module/library/page-break.js");
/* harmony import */ var _library_custom_link__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./library/custom-link */ "../../node_modules/@wordpress/icons/build-module/library/custom-link.js");
/* harmony import */ var _library_page__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./library/page */ "../../node_modules/@wordpress/icons/build-module/library/page.js");
/* harmony import */ var _library_pages__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./library/pages */ "../../node_modules/@wordpress/icons/build-module/library/pages.js");
/* harmony import */ var _library_paragraph__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./library/paragraph */ "../../node_modules/@wordpress/icons/build-module/library/paragraph.js");
/* harmony import */ var _library_payment__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./library/payment */ "../../node_modules/@wordpress/icons/build-module/library/payment.js");
/* harmony import */ var _library_percent__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./library/percent */ "../../node_modules/@wordpress/icons/build-module/library/percent.js");
/* harmony import */ var _library_position_center__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./library/position-center */ "../../node_modules/@wordpress/icons/build-module/library/position-center.js");
/* harmony import */ var _library_position_left__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./library/position-left */ "../../node_modules/@wordpress/icons/build-module/library/position-left.js");
/* harmony import */ var _library_position_right__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./library/position-right */ "../../node_modules/@wordpress/icons/build-module/library/position-right.js");
/* harmony import */ var _library_pencil__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./library/pencil */ "../../node_modules/@wordpress/icons/build-module/library/pencil.js");
/* harmony import */ var _library_people__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./library/people */ "../../node_modules/@wordpress/icons/build-module/library/people.js");
/* harmony import */ var _library_pin__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./library/pin */ "../../node_modules/@wordpress/icons/build-module/library/pin.js");
/* harmony import */ var _library_plugins__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./library/plugins */ "../../node_modules/@wordpress/icons/build-module/library/plugins.js");
/* harmony import */ var _library_plus_circle_filled__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./library/plus-circle-filled */ "../../node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js");
/* harmony import */ var _library_plus_circle__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./library/plus-circle */ "../../node_modules/@wordpress/icons/build-module/library/plus-circle.js");
/* harmony import */ var _library_plus__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./library/plus */ "../../node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _library_post__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./library/post */ "../../node_modules/@wordpress/icons/build-module/library/post.js");
/* harmony import */ var _library_post_author__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./library/post-author */ "../../node_modules/@wordpress/icons/build-module/library/post-author.js");
/* harmony import */ var _library_post_categories__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./library/post-categories */ "../../node_modules/@wordpress/icons/build-module/library/post-categories.js");
/* harmony import */ var _library_post_content__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./library/post-content */ "../../node_modules/@wordpress/icons/build-module/library/post-content.js");
/* harmony import */ var _library_post_comments__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./library/post-comments */ "../../node_modules/@wordpress/icons/build-module/library/post-comments.js");
/* harmony import */ var _library_post_comments_count__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./library/post-comments-count */ "../../node_modules/@wordpress/icons/build-module/library/post-comments-count.js");
/* harmony import */ var _library_post_comments_form__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./library/post-comments-form */ "../../node_modules/@wordpress/icons/build-module/library/post-comments-form.js");
/* harmony import */ var _library_post_date__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./library/post-date */ "../../node_modules/@wordpress/icons/build-module/library/post-date.js");
/* harmony import */ var _library_post_excerpt__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./library/post-excerpt */ "../../node_modules/@wordpress/icons/build-module/library/post-excerpt.js");
/* harmony import */ var _library_post_featured_image__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./library/post-featured-image */ "../../node_modules/@wordpress/icons/build-module/library/post-featured-image.js");
/* harmony import */ var _library_post_list__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./library/post-list */ "../../node_modules/@wordpress/icons/build-module/library/post-list.js");
/* harmony import */ var _library_post_title__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./library/post-title */ "../../node_modules/@wordpress/icons/build-module/library/post-title.js");
/* harmony import */ var _library_post_terms__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./library/post-terms */ "../../node_modules/@wordpress/icons/build-module/library/post-terms.js");
/* harmony import */ var _library_previous__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./library/previous */ "../../node_modules/@wordpress/icons/build-module/library/previous.js");
/* harmony import */ var _library_next__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./library/next */ "../../node_modules/@wordpress/icons/build-module/library/next.js");
/* harmony import */ var _library_preformatted__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./library/preformatted */ "../../node_modules/@wordpress/icons/build-module/library/preformatted.js");
/* harmony import */ var _library_pull_left__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./library/pull-left */ "../../node_modules/@wordpress/icons/build-module/library/pull-left.js");
/* harmony import */ var _library_pull_right__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./library/pull-right */ "../../node_modules/@wordpress/icons/build-module/library/pull-right.js");
/* harmony import */ var _library_pullquote__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./library/pullquote */ "../../node_modules/@wordpress/icons/build-module/library/pullquote.js");
/* harmony import */ var _library_query_pagination__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./library/query-pagination */ "../../node_modules/@wordpress/icons/build-module/library/query-pagination.js");
/* harmony import */ var _library_query_pagination_next__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./library/query-pagination-next */ "../../node_modules/@wordpress/icons/build-module/library/query-pagination-next.js");
/* harmony import */ var _library_query_pagination_numbers__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./library/query-pagination-numbers */ "../../node_modules/@wordpress/icons/build-module/library/query-pagination-numbers.js");
/* harmony import */ var _library_query_pagination_previous__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./library/query-pagination-previous */ "../../node_modules/@wordpress/icons/build-module/library/query-pagination-previous.js");
/* harmony import */ var _library_query_title__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./library/query-title */ "../../node_modules/@wordpress/icons/build-module/library/query-title.js");
/* harmony import */ var _library_quote__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./library/quote */ "../../node_modules/@wordpress/icons/build-module/library/quote.js");
/* harmony import */ var _library_receipt__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./library/receipt */ "../../node_modules/@wordpress/icons/build-module/library/receipt.js");
/* harmony import */ var _library_redo__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./library/redo */ "../../node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony import */ var _library_remove_bug__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./library/remove-bug */ "../../node_modules/@wordpress/icons/build-module/library/remove-bug.js");
/* harmony import */ var _library_remove_submenu__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./library/remove-submenu */ "../../node_modules/@wordpress/icons/build-module/library/remove-submenu.js");
/* harmony import */ var _library_replace__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./library/replace */ "../../node_modules/@wordpress/icons/build-module/library/replace.js");
/* harmony import */ var _library_reset__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./library/reset */ "../../node_modules/@wordpress/icons/build-module/library/reset.js");
/* harmony import */ var _library_resize_corner_n_e__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./library/resize-corner-n-e */ "../../node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js");
/* harmony import */ var _library_reusable_block__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./library/reusable-block */ "../../node_modules/@wordpress/icons/build-module/library/reusable-block.js");
/* harmony import */ var _library_symbol__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./library/symbol */ "../../node_modules/@wordpress/icons/build-module/library/symbol.js");
/* harmony import */ var _library_rotate_left__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./library/rotate-left */ "../../node_modules/@wordpress/icons/build-module/library/rotate-left.js");
/* harmony import */ var _library_rotate_right__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./library/rotate-right */ "../../node_modules/@wordpress/icons/build-module/library/rotate-right.js");
/* harmony import */ var _library_rss__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./library/rss */ "../../node_modules/@wordpress/icons/build-module/library/rss.js");
/* harmony import */ var _library_search__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./library/search */ "../../node_modules/@wordpress/icons/build-module/library/search.js");
/* harmony import */ var _library_separator__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./library/separator */ "../../node_modules/@wordpress/icons/build-module/library/separator.js");
/* harmony import */ var _library_settings__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./library/settings */ "../../node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony import */ var _library_share__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./library/share */ "../../node_modules/@wordpress/icons/build-module/library/share.js");
/* harmony import */ var _library_shield__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./library/shield */ "../../node_modules/@wordpress/icons/build-module/library/shield.js");
/* harmony import */ var _library_shortcode__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./library/shortcode */ "../../node_modules/@wordpress/icons/build-module/library/shortcode.js");
/* harmony import */ var _library_site_logo__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./library/site-logo */ "../../node_modules/@wordpress/icons/build-module/library/site-logo.js");
/* harmony import */ var _library_stack__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./library/stack */ "../../node_modules/@wordpress/icons/build-module/library/stack.js");
/* harmony import */ var _library_star_empty__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./library/star-empty */ "../../node_modules/@wordpress/icons/build-module/library/star-empty.js");
/* harmony import */ var _library_star_filled__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./library/star-filled */ "../../node_modules/@wordpress/icons/build-module/library/star-filled.js");
/* harmony import */ var _library_star_half__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./library/star-half */ "../../node_modules/@wordpress/icons/build-module/library/star-half.js");
/* harmony import */ var _library_store__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./library/store */ "../../node_modules/@wordpress/icons/build-module/library/store.js");
/* harmony import */ var _library_stretch_full_width__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./library/stretch-full-width */ "../../node_modules/@wordpress/icons/build-module/library/stretch-full-width.js");
/* harmony import */ var _library_styles__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./library/styles */ "../../node_modules/@wordpress/icons/build-module/library/styles.js");
/* harmony import */ var _library_shipping__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./library/shipping */ "../../node_modules/@wordpress/icons/build-module/library/shipping.js");
/* harmony import */ var _library_stretch_wide__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./library/stretch-wide */ "../../node_modules/@wordpress/icons/build-module/library/stretch-wide.js");
/* harmony import */ var _library_subscript__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./library/subscript */ "../../node_modules/@wordpress/icons/build-module/library/subscript.js");
/* harmony import */ var _library_superscript__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./library/superscript */ "../../node_modules/@wordpress/icons/build-module/library/superscript.js");
/* harmony import */ var _library_swatch__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./library/swatch */ "../../node_modules/@wordpress/icons/build-module/library/swatch.js");
/* harmony import */ var _library_table_column_after__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./library/table-column-after */ "../../node_modules/@wordpress/icons/build-module/library/table-column-after.js");
/* harmony import */ var _library_table_column_before__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./library/table-column-before */ "../../node_modules/@wordpress/icons/build-module/library/table-column-before.js");
/* harmony import */ var _library_table_column_delete__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./library/table-column-delete */ "../../node_modules/@wordpress/icons/build-module/library/table-column-delete.js");
/* harmony import */ var _library_table_row_after__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./library/table-row-after */ "../../node_modules/@wordpress/icons/build-module/library/table-row-after.js");
/* harmony import */ var _library_table_row_before__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./library/table-row-before */ "../../node_modules/@wordpress/icons/build-module/library/table-row-before.js");
/* harmony import */ var _library_table_row_delete__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./library/table-row-delete */ "../../node_modules/@wordpress/icons/build-module/library/table-row-delete.js");
/* harmony import */ var _library_table__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./library/table */ "../../node_modules/@wordpress/icons/build-module/library/table.js");
/* harmony import */ var _library_tag__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./library/tag */ "../../node_modules/@wordpress/icons/build-module/library/tag.js");
/* harmony import */ var _library_symbol_filled__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./library/symbol-filled */ "../../node_modules/@wordpress/icons/build-module/library/symbol-filled.js");
/* harmony import */ var _library_term_description__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./library/term-description */ "../../node_modules/@wordpress/icons/build-module/library/term-description.js");
/* harmony import */ var _library_footer__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./library/footer */ "../../node_modules/@wordpress/icons/build-module/library/footer.js");
/* harmony import */ var _library_header__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./library/header */ "../../node_modules/@wordpress/icons/build-module/library/header.js");
/* harmony import */ var _library_sidebar__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./library/sidebar */ "../../node_modules/@wordpress/icons/build-module/library/sidebar.js");
/* harmony import */ var _library_text_color__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./library/text-color */ "../../node_modules/@wordpress/icons/build-module/library/text-color.js");
/* harmony import */ var _library_tablet__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./library/tablet */ "../../node_modules/@wordpress/icons/build-module/library/tablet.js");
/* harmony import */ var _library_title__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./library/title */ "../../node_modules/@wordpress/icons/build-module/library/title.js");
/* harmony import */ var _library_tip__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./library/tip */ "../../node_modules/@wordpress/icons/build-module/library/tip.js");
/* harmony import */ var _library_tool__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./library/tool */ "../../node_modules/@wordpress/icons/build-module/library/tool.js");
/* harmony import */ var _library_trash__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./library/trash */ "../../node_modules/@wordpress/icons/build-module/library/trash.js");
/* harmony import */ var _library_trending_down__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./library/trending-down */ "../../node_modules/@wordpress/icons/build-module/library/trending-down.js");
/* harmony import */ var _library_trending_up__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./library/trending-up */ "../../node_modules/@wordpress/icons/build-module/library/trending-up.js");
/* harmony import */ var _library_typography__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./library/typography */ "../../node_modules/@wordpress/icons/build-module/library/typography.js");
/* harmony import */ var _library_undo__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./library/undo */ "../../node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony import */ var _library_ungroup__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(/*! ./library/ungroup */ "../../node_modules/@wordpress/icons/build-module/library/ungroup.js");
/* harmony import */ var _library_unlock__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(/*! ./library/unlock */ "../../node_modules/@wordpress/icons/build-module/library/unlock.js");
/* harmony import */ var _library_update__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(/*! ./library/update */ "../../node_modules/@wordpress/icons/build-module/library/update.js");
/* harmony import */ var _library_upload__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(/*! ./library/upload */ "../../node_modules/@wordpress/icons/build-module/library/upload.js");
/* harmony import */ var _library_verse__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(/*! ./library/verse */ "../../node_modules/@wordpress/icons/build-module/library/verse.js");
/* harmony import */ var _library_video__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(/*! ./library/video */ "../../node_modules/@wordpress/icons/build-module/library/video.js");
/* harmony import */ var _library_warning__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(/*! ./library/warning */ "../../node_modules/@wordpress/icons/build-module/library/warning.js");
/* harmony import */ var _library_widget__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(/*! ./library/widget */ "../../node_modules/@wordpress/icons/build-module/library/widget.js");
/* harmony import */ var _library_wordpress__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(/*! ./library/wordpress */ "../../node_modules/@wordpress/icons/build-module/library/wordpress.js");















































































































































































































































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/add-card.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/add-card.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const addCard = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.5 5.5V8H20V5.5h2.5V4H20V1.5h-1.5V4H16v1.5h2.5zM12 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-6h-1.5v6a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h6V4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (addCard);
//# sourceMappingURL=add-card.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/add-submenu.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/add-submenu.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const addSubmenu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M2 12c0 3.6 2.4 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.5 0-4.5-1.5-4.5-4s2-4.5 4.5-4.5h3.5V6H8c-3.6 0-6 2.4-6 6zm19.5-1h-8v1.5h8V11zm0 5h-8v1.5h8V16zm0-10h-8v1.5h8V6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (addSubmenu);
//# sourceMappingURL=add-submenu.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/align-center.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/align-center.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const alignCenter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.4 4.2H7.6v1.5h8.9V4.2zM4 11.2v1.5h16v-1.5H4zm3.6 8.6h8.9v-1.5H7.6v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignCenter);
//# sourceMappingURL=align-center.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/align-justify.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/align-justify.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const alignJustify = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 12.8h16v-1.5H4v1.5zm0 7h12.4v-1.5H4v1.5zM4 4.3v1.5h16V4.3H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignJustify);
//# sourceMappingURL=align-justify.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/align-left.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/align-left.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const alignLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 19.8h8.9v-1.5H4v1.5zm8.9-15.6H4v1.5h8.9V4.2zm-8.9 7v1.5h16v-1.5H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignLeft);
//# sourceMappingURL=align-left.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/align-none.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/align-none.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const alignNone = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 15h14V9H5v6zm0 4.8h14v-1.5H5v1.5zM5 4.2v1.5h14V4.2H5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignNone);
//# sourceMappingURL=align-none.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/align-right.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/align-right.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const alignRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.1 19.8H20v-1.5h-8.9v1.5zm0-15.6v1.5H20V4.2h-8.9zM4 12.8h16v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (alignRight);
//# sourceMappingURL=align-right.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/archive-title.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/archive-title.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const archiveTitle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.08 10.103h2.914L9.657 12h1.417L8.23 4H6.846L4 12h1.417l.663-1.897Zm1.463-4.137.994 2.857h-2l1.006-2.857ZM20 16H4v-1.5h16V16Zm-7 4H4v-1.5h9V20Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (archiveTitle);
//# sourceMappingURL=archive-title.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/archive.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/archive.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const archive = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (archive);
//# sourceMappingURL=archive.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/arrow-down.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/arrow-down.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowDown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.2 13.2l-4 4V4h-1.5v13.3l-4.5-4.1-1 1.1 6.2 5.8 5.8-5.8-1-1.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrowDown);
//# sourceMappingURL=arrow-down.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/arrow-left.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/arrow-left.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrowLeft);
//# sourceMappingURL=arrow-left.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/arrow-right.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/arrow-right.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.3 6.7l-1.1 1.1 4 4H4v1.5h13.3l-4.1 4.4 1.1 1.1 5.8-6.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrowRight);
//# sourceMappingURL=arrow-right.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/arrow-up.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/arrow-up.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const arrowUp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.5 3.9L6.7 9.7l1.1 1.1 4-4V20h1.4V6.7l4.5 4.1 1.1-1.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (arrowUp);
//# sourceMappingURL=arrow-up.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/aspect-ratio.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/aspect-ratio.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const aspectRatio = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.5 5.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v9zM6.5 12H8v-2h2V8.5H6.5V12zm9.5 2h-2v1.5h3.5V12H16v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (aspectRatio);
//# sourceMappingURL=aspect-ratio.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/at-symbol.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/at-symbol.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const atSymbol = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.5939 21C14.1472 21 16.1269 20.5701 17.0711 20.1975L16.6447 18.879C16.0964 19.051 14.3299 19.6242 12.6548 19.6242C7.4467 19.6242 4.67513 16.8726 4.67513 12C4.67513 7.21338 7.50762 4.34713 12.2893 4.34713C17.132 4.34713 19.4162 7.55732 19.4162 10.7675C19.4162 14.035 19.0508 15.4968 17.4975 15.4968C16.5838 15.4968 16.0964 14.7803 16.0964 13.9777V7.5H14.4822V8.30255H14.3909C14.1777 7.67198 12.9898 7.12739 11.467 7.2707C9.18274 7.5 7.4467 9.27707 7.4467 11.8567C7.4467 14.5796 8.81726 16.672 11.467 16.758C13.203 16.8153 14.1168 16.0127 14.4822 15.1815H14.5736C14.7563 16.414 16.401 16.8439 17.467 16.8439C20.6954 16.8439 21 13.5764 21 10.7962C21 6.86943 18.0761 3 12.3807 3C6.50254 3 3 6.3535 3 11.9427C3 17.7325 6.38071 21 12.5939 21ZM11.7107 15.2962C9.73096 15.2962 9.03046 13.6051 9.03046 11.7707C9.03046 10.1083 10.0355 8.67516 11.7716 8.67516C13.599 8.67516 14.5736 9.36306 14.5736 11.7707C14.5736 14.1497 13.7513 15.2962 11.7107 15.2962Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (atSymbol);
//# sourceMappingURL=at-symbol.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/audio.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/audio.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const audio = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.7 4.3c-1.2 0-2.8 0-3.8 1-.6.6-.9 1.5-.9 2.6V14c-.6-.6-1.5-1-2.5-1C8.6 13 7 14.6 7 16.5S8.6 20 10.5 20c1.5 0 2.8-1 3.3-2.3.5-.8.7-1.8.7-2.5V7.9c0-.7.2-1.2.5-1.6.6-.6 1.8-.6 2.8-.6h.3V4.3h-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (audio);
//# sourceMappingURL=audio.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/backup.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/backup.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const backup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (backup);
//# sourceMappingURL=backup.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/block-default.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/block-default.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const blockDefault = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 8h-1V6h-5v2h-2V6H6v2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm.5 10c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-8c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (blockDefault);
//# sourceMappingURL=block-default.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/block-table.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/block-table.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const blockTable = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v3.5h-15V5c0-.3.2-.5.5-.5zm8 5.5h6.5v3.5H13V10zm-1.5 3.5h-7V10h7v3.5zm-7 5.5v-4h7v4.5H5c-.3 0-.5-.2-.5-.5zm14.5.5h-6V15h6.5v4c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (blockTable);
//# sourceMappingURL=block-table.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/box.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/box.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const box = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M5 5.5h14a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 9.232A2 2 0 013 7.5V6a2 2 0 012-2h14a2 2 0 012 2v1.5a2 2 0 01-1 1.732V18a2 2 0 01-2 2H6a2 2 0 01-2-2V9.232zm1.5.268V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V9.5h-13z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (box);
//# sourceMappingURL=box.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/brush.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/brush.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const brush = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 20h8v-1.5H4V20zM18.9 3.5c-.6-.6-1.5-.6-2.1 0l-7.2 7.2c-.4-.1-.7 0-1.1.1-.5.2-1.5.7-1.9 2.2-.4 1.7-.8 2.2-1.1 2.7-.1.1-.2.3-.3.4l-.6 1.1H6c2 0 3.4-.4 4.7-1.4.8-.6 1.2-1.4 1.3-2.3 0-.3 0-.5-.1-.7L19 5.7c.5-.6.5-1.6-.1-2.2zM9.7 14.7c-.7.5-1.5.8-2.4 1 .2-.5.5-1.2.8-2.3.2-.6.4-1 .8-1.1.5-.1 1 .1 1.3.3.2.2.3.5.2.8 0 .3-.1.9-.7 1.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (brush);
//# sourceMappingURL=brush.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/bug.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/bug.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const bug = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.13 5.5l1.926 1.927A4.975 4.975 0 007.025 10H5v1.5h2V13H5v1.5h2.1a5.002 5.002 0 009.8 0H19V13h-2v-1.5h2V10h-2.025a4.979 4.979 0 00-1.167-2.74l1.76-1.76-1.061-1.06-1.834 1.834A4.977 4.977 0 0012 5.5c-1.062 0-2.046.33-2.855.895L7.19 4.44 6.13 5.5zm2.37 5v3a3.5 3.5 0 107 0v-3a3.5 3.5 0 10-7 0z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (bug);
//# sourceMappingURL=bug.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/button.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/button.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const button = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 6.5H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h14c.3 0 .5.2.5.5v7zM8 12.8h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (button);
//# sourceMappingURL=button.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/buttons.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/buttons.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const buttons = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17 3H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V5c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5V6.2h-5v1.6zM17 13H7c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v4zm-8-1.2h5v-1.5h-5v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (buttons);
//# sourceMappingURL=buttons.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/calendar.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/calendar.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const calendar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (calendar);
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/cancel-circle-filled.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cancelCircleFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L13.0607 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L12 13.0607L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L10.9393 12L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L12 10.9393L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cancelCircleFilled);
//# sourceMappingURL=cancel-circle-filled.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/capture-photo.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/capture-photo.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const capturePhoto = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 9.2c-2.2 0-3.9 1.8-3.9 4s1.8 4 3.9 4 4-1.8 4-4-1.8-4-4-4zm0 6.5c-1.4 0-2.4-1.1-2.4-2.5s1.1-2.5 2.4-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zM20.2 8c-.1 0-.3 0-.5-.1l-2.5-.8c-.4-.1-.8-.4-1.1-.8l-1-1.5c-.4-.5-1-.9-1.7-.9h-2.9c-.6.1-1.2.4-1.6 1l-1 1.5c-.3.3-.6.6-1.1.7l-2.5.8c-.2.1-.4.1-.6.1-1 .2-1.7.9-1.7 1.9v8.3c0 1 .9 1.9 2 1.9h16c1.1 0 2-.8 2-1.9V9.9c0-1-.7-1.7-1.8-1.9zm.3 10.1c0 .2-.2.4-.5.4H4c-.3 0-.5-.2-.5-.4V9.9c0-.1.2-.3.5-.4.2 0 .5-.1.8-.2l2.5-.8c.7-.2 1.4-.6 1.8-1.3l1-1.5c.1-.1.2-.2.4-.2h2.9c.2 0 .3.1.4.2l1 1.5c.4.7 1.1 1.1 1.9 1.4l2.5.8c.3.1.6.1.8.2.3 0 .4.2.4.4v8.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (capturePhoto);
//# sourceMappingURL=capture-photo.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/capture-video.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/capture-video.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const captureVideo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm.5 12c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v10zm2.5-7v4l5 3V7l-5 3zm3.5 4.4l-2-1.2v-2.3l2-1.2v4.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (captureVideo);
//# sourceMappingURL=capture-video.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/category.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/category.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const category = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (category);
//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/chart-bar.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/chart-bar.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chartBar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M11.25 5h1.5v15h-1.5V5zM6 10h1.5v10H6V10zm12 4h-1.5v6H18v-6z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (chartBar);
//# sourceMappingURL=chart-bar.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/check.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/chevron-down.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronDown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/chevron-left.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronLeft);
//# sourceMappingURL=chevron-left.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/chevron-right-small.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/chevron-right-small.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronRightSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.8622 8.04053L14.2805 12.0286L10.8622 16.0167L9.72327 15.0405L12.3049 12.0286L9.72327 9.01672L10.8622 8.04053Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronRightSmall);
//# sourceMappingURL=chevron-right-small.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/chevron-right.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/chevron-right.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronRight);
//# sourceMappingURL=chevron-right.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/chevron-up.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/chevron-up.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const chevronUp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (chevronUp);
//# sourceMappingURL=chevron-up.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/classic.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/classic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const classic = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 6H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h16c.3 0 .5.2.5.5v9zM10 10H8v2h2v-2zm-5 2h2v-2H5v2zm8-2h-2v2h2v-2zm-5 6h8v-2H8v2zm6-4h2v-2h-2v2zm3 0h2v-2h-2v2zm0 4h2v-2h-2v2zM5 16h2v-2H5v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (classic);
//# sourceMappingURL=classic.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/close-small.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const closeSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
}));
/* harmony default export */ __webpack_exports__["default"] = (closeSmall);
//# sourceMappingURL=close-small.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/close.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/close.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const close = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (close);
//# sourceMappingURL=close.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/cloud-upload.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/cloud-upload.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cloudUpload = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-4v-2.4L14 14l1-1-3-3-3 3 1 1 1.2-1.2v2.4H7.7c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4H9l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8 0 1-.8 1.8-1.7 1.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cloudUpload);
//# sourceMappingURL=cloud-upload.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/cloud.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/cloud.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cloud = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cloud);
//# sourceMappingURL=cloud.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/code.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/code.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const code = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (code);
//# sourceMappingURL=code.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/cog.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/cog.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cog = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (cog);
//# sourceMappingURL=cog.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/color.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/color.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const color = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (color);
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/column.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/column.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const column = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM6 17.5c-.3 0-.5-.2-.5-.5V8c0-.3.2-.5.5-.5h3v10H6zm13.5-.5c0 .3-.2.5-.5.5h-3v-10h3c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ __webpack_exports__["default"] = (column);
//# sourceMappingURL=column.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/columns.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/columns.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const columns = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4.1 1.5v10H10v-10h4.9zM5.5 17V8c0-.3.2-.5.5-.5h2.5v10H6c-.3 0-.5-.2-.5-.5zm14 0c0 .3-.2.5-.5.5h-2.6v-10H19c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ __webpack_exports__["default"] = (columns);
//# sourceMappingURL=columns.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/comment-author-avatar.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const commentAuthorAvatar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (commentAuthorAvatar);
//# sourceMappingURL=comment-author-avatar.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/comment-author-name.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/comment-author-name.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const commentAuthorName = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15 15V15C15 13.8954 14.1046 13 13 13L11 13C9.89543 13 9 13.8954 9 15V15",
  fillRule: "evenodd",
  clipRule: "evenodd"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Circle, {
  cx: "12",
  cy: "9",
  r: "2",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (commentAuthorName);
//# sourceMappingURL=comment-author-name.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/comment-content.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/comment-content.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const commentContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M6.68822 16.625L5.5 17.8145L5.5 5.5L18.5 5.5L18.5 16.625L6.68822 16.625ZM7.31 18.125L19 18.125C19.5523 18.125 20 17.6773 20 17.125L20 5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19.5247C4 19.8173 4.16123 20.086 4.41935 20.2237C4.72711 20.3878 5.10601 20.3313 5.35252 20.0845L7.31 18.125ZM16 9.99997H8V8.49997H16V9.99997ZM8 14H13V12.5H8V14Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (commentContent);
//# sourceMappingURL=comment-content.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/comment-edit-link.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/comment-edit-link.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const commentEditLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m6.249 11.065.44-.44h3.186l-1.5 1.5H7.31l-1.957 1.96A.792.792 0 0 1 4 13.524V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.5L12.5 8V5.5h-7v6.315l.749-.75ZM20 19.75H7v-1.5h13v1.5Zm0-12.653-8.967 9.064L8 17l.867-2.935L17.833 5 20 7.097Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (commentEditLink);
//# sourceMappingURL=comment-edit-link.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/comment-reply-link.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/comment-reply-link.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const commentReplyLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.68822 10.625L6.24878 11.0649L5.5 11.8145L5.5 5.5L12.5 5.5V8L14 6.5V5C14 4.44772 13.5523 4 13 4H5C4.44772 4 4 4.44771 4 5V13.5247C4 13.8173 4.16123 14.086 4.41935 14.2237C4.72711 14.3878 5.10601 14.3313 5.35252 14.0845L7.31 12.125H8.375L9.875 10.625H7.31H6.68822ZM14.5605 10.4983L11.6701 13.75H16.9975C17.9963 13.75 18.7796 14.1104 19.3553 14.7048C19.9095 15.2771 20.2299 16.0224 20.4224 16.7443C20.7645 18.0276 20.7543 19.4618 20.7487 20.2544C20.7481 20.345 20.7475 20.4272 20.7475 20.4999L19.2475 20.5001C19.2475 20.4191 19.248 20.3319 19.2484 20.2394V20.2394C19.2526 19.4274 19.259 18.2035 18.973 17.1307C18.8156 16.5401 18.586 16.0666 18.2778 15.7483C17.9909 15.4521 17.5991 15.25 16.9975 15.25H11.8106L14.5303 17.9697L13.4696 19.0303L8.96956 14.5303L13.4394 9.50171L14.5605 10.4983Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (commentReplyLink);
//# sourceMappingURL=comment-reply-link.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/comment.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/comment.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const comment = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12.9c0 .6.5 1.1 1.1 1.1.3 0 .5-.1.8-.3L8.5 17H18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5H7.9l-2.4 2.4V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ __webpack_exports__["default"] = (comment);
//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/cover.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/cover.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const cover = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h6.2v8.9l2.5-3.1 2.5 3.1V4.5h2.2c.4 0 .8.4.8.8v13.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (cover);
//# sourceMappingURL=cover.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/create.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/create.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const create = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16 11.2h-3.2V8h-1.6v3.2H8v1.6h3.2V16h1.6v-3.2H16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (create);
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/crop.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/crop.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const crop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.5 7.8v7H18v-7c0-1-.8-1.8-1.8-1.8h-7v1.5h7c.2 0 .3.1.3.3zm-8.7 8.7c-.1 0-.2-.1-.2-.2V2H6v4H2v1.5h4v8.8c0 1 .8 1.8 1.8 1.8h8.8v4H18v-4h4v-1.5H7.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (crop);
//# sourceMappingURL=crop.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/currency-dollar.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/currency-dollar.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const currencyDollar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm-1.338 4.877c-.314.22-.412.452-.412.623 0 .171.098.403.412.623.312.218.783.377 1.338.377.825 0 1.605.233 2.198.648.59.414 1.052 1.057 1.052 1.852 0 .795-.461 1.438-1.052 1.852-.41.286-.907.486-1.448.582v.316a.75.75 0 01-1.5 0v-.316a3.64 3.64 0 01-1.448-.582c-.59-.414-1.052-1.057-1.052-1.852a.75.75 0 011.5 0c0 .171.098.403.412.623.312.218.783.377 1.338.377s1.026-.159 1.338-.377c.314-.22.412-.452.412-.623 0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377-.825 0-1.605-.233-2.198-.648-.59-.414-1.052-1.057-1.052-1.852 0-.795.461-1.438 1.052-1.852a3.64 3.64 0 011.448-.582V7.5a.75.75 0 011.5 0v.316c.54.096 1.039.296 1.448.582.59.414 1.052 1.057 1.052 1.852a.75.75 0 01-1.5 0c0-.171-.098-.403-.412-.623-.312-.218-.783-.377-1.338-.377s-1.026.159-1.338.377z"
}));
/* harmony default export */ __webpack_exports__["default"] = (currencyDollar);
//# sourceMappingURL=currency-dollar.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/currency-euro.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/currency-euro.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const currencyEuro = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM4.75 12a7.25 7.25 0 1114.5 0 7.25 7.25 0 01-14.5 0zm9.195 1.944a2.75 2.75 0 01-4.066-.194h.621a.75.75 0 000-1.5H9.262a2.767 2.767 0 010-.5H11.5a.75.75 0 000-1.5H9.88a2.75 2.75 0 014.066-.194.75.75 0 001.06-1.061 4.25 4.25 0 00-6.88 1.255H7.5a.75.75 0 000 1.5h.258c-.01.166-.01.334 0 .5H7.5a.75.75 0 000 1.5h.626a4.25 4.25 0 006.88 1.255.75.75 0 00-1.06-1.06z"
}));
/* harmony default export */ __webpack_exports__["default"] = (currencyEuro);
//# sourceMappingURL=currency-euro.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/currency-pound.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/currency-pound.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const currencyPound = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zm.25 4c-.787 0-1.425.638-1.425 1.425 0 .058.014.147.069.3.04.113.088.223.147.36a26.094 26.094 0 01.173.415H12.5a.75.75 0 010 1.5h-.953c.002.047.003.095.003.144 0 .617-.236 1.168-.511 1.606h3.386a.75.75 0 010 1.5H9.35a.75.75 0 01-.452-1.349l.007-.005a4.417 4.417 0 00.596-.581c.328-.39.549-.806.549-1.171 0-.05-.002-.097-.004-.144H9.5a.75.75 0 010-1.5h.088a5.875 5.875 0 01-.106-.27 2.382 2.382 0 01-.157-.805 2.925 2.925 0 015.637-1.097.75.75 0 01-1.39.563 1.426 1.426 0 00-1.322-.891zm-3.35 5.9l.45.6-.45-.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (currencyPound);
//# sourceMappingURL=currency-pound.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/custom-link.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/custom-link.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const customLink = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.5 14.5h-1V16h1c2.2 0 4-1.8 4-4s-1.8-4-4-4h-1v1.5h1c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zm-4 1.5v-1.5h-1C6.1 14.5 5 13.4 5 12s1.1-2.5 2.5-2.5h1V8h-1c-2.2 0-4 1.8-4 4s1.8 4 4 4h1zm-1-3.2h5v-1.5h-5v1.5zM18 4H9c-1.1 0-2 .9-2 2v.5h1.5V6c0-.3.2-.5.5-.5h9c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5v-.5H7v.5c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (customLink);
//# sourceMappingURL=custom-link.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/custom-post-type.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/custom-post-type.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const customPostType = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4zm.8-4l.7.7 2-2V12h1V9.2l2 2 .7-.7-2-2H12v-1H9.2l2-2-.7-.7-2 2V4h-1v2.8l-2-2-.7.7 2 2H4v1h2.8l-2 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (customPostType);
//# sourceMappingURL=custom-post-type.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/desktop.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/desktop.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (desktop);
//# sourceMappingURL=desktop.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/download.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/download.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const download = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (download);
//# sourceMappingURL=download.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/drag-handle.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/drag-handle.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const dragHandle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M8 7h2V5H8v2zm0 6h2v-2H8v2zm0 6h2v-2H8v2zm6-14v2h2V5h-2zm0 8h2v-2h-2v2zm0 6h2v-2h-2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (dragHandle);
//# sourceMappingURL=drag-handle.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/edit.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "../../node_modules/@wordpress/icons/build-module/library/pencil.js");
/**
 * Internal dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (_pencil__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/external.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/external.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const external = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (external);
//# sourceMappingURL=external.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/file.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/file.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const file = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (file);
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/flip-horizontal.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/flip-horizontal.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const flipHorizontal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 6v12c0 1.1.9 2 2 2h3v-1.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h3V4H6c-1.1 0-2 .9-2 2zm7.2 16h1.5V2h-1.5v20zM15 5.5h1.5V4H15v1.5zm3.5.5H20c0-1.1-.9-2-2-2v1.5c.3 0 .5.2.5.5zm0 10.5H20v-2h-1.5v2zm0-3.5H20v-2h-1.5v2zm-.5 5.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zM15 20h1.5v-1.5H15V20zm3.5-10.5H20v-2h-1.5v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (flipHorizontal);
//# sourceMappingURL=flip-horizontal.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/flip-vertical.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/flip-vertical.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const flipVertical = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M2 11.2v1.5h20v-1.5H2zM5.5 6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v3H20V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3h1.5V6zm2 14h2v-1.5h-2V20zm3.5 0h2v-1.5h-2V20zm7-1.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zm.5-2H20V15h-1.5v1.5zM5.5 18H4c0 1.1.9 2 2 2v-1.5c-.3 0-.5-.2-.5-.5zm0-3H4v1.5h1.5V15zm9 5h2v-1.5h-2V20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (flipVertical);
//# sourceMappingURL=flip-vertical.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/footer.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/footer.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const footer = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M18 5.5h-8v8h8.5V6a.5.5 0 00-.5-.5zm-9.5 8h-3V6a.5.5 0 01.5-.5h2.5v8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (footer);
//# sourceMappingURL=footer.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-bold.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-bold.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatBold = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatBold);
//# sourceMappingURL=format-bold.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-capitalize.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-capitalize.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatCapitalize = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatCapitalize);
//# sourceMappingURL=format-capitalize.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-indent-rtl.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-indent-rtl.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatIndentRTL = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM20.0303 9.03033L17.0607 12L20.0303 14.9697L18.9697 16.0303L15.4697 12.5303L14.9393 12L15.4697 11.4697L18.9697 7.96967L20.0303 9.03033Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatIndentRTL);
//# sourceMappingURL=format-indent-rtl.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-indent.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-indent.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatIndent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatIndent);
//# sourceMappingURL=format-indent.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-italic.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-italic.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatItalic = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.5 5L10 19h1.9l2.5-14z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatItalic);
//# sourceMappingURL=format-italic.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js":
/*!*******************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-list-bullets-rtl.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatListBulletsRTL = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 8.8h8.9V7.2H4v1.6zm0 7h8.9v-1.5H4v1.5zM18 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatListBulletsRTL);
//# sourceMappingURL=format-list-bullets-rtl.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-list-bullets.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-list-bullets.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatListBullets = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatListBullets);
//# sourceMappingURL=format-list-bullets.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-list-numbered-rtl.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-list-numbered-rtl.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatListNumberedRTL = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3.8 15.8h8.9v-1.5H3.8v1.5zm0-7h8.9V7.2H3.8v1.6zm14.7-2.1V10h1V5.3l-2.2.7.3 1 .9-.3zm1.2 6.1c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5H20v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3 0-.8-.3-1.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatListNumberedRTL);
//# sourceMappingURL=format-list-numbered-rtl.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-list-numbered.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-list-numbered.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatListNumbered = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatListNumbered);
//# sourceMappingURL=format-list-numbered.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-lowercase.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-lowercase.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatLowercase = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatLowercase);
//# sourceMappingURL=format-lowercase.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-ltr.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-ltr.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatLtr = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM14 14l5-4-5-4v8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatLtr);
//# sourceMappingURL=format-ltr.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-outdent-rtl.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-outdent-rtl.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatOutdentRTL = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 5.5H4V4H20V5.5ZM12 12.5H4V11H12V12.5ZM20 20V18.5H4V20H20ZM15.4697 14.9697L18.4393 12L15.4697 9.03033L16.5303 7.96967L20.0303 11.4697L20.5607 12L20.0303 12.5303L16.5303 16.0303L15.4697 14.9697Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatOutdentRTL);
//# sourceMappingURL=format-outdent-rtl.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-outdent.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-outdent.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatOutdent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatOutdent);
//# sourceMappingURL=format-outdent.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-rtl.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-rtl.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatRtl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM19 6l-5 4 5 4V6zM5.52 2h7.43c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v12c0 .55-.45 1-1 1s-1-.45-1-1v-5.96h-.43C3.02 11.04 1 9.02 1 6.52S3.02 2 5.52 2zM19 6l-5 4 5 4V6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatRtl);
//# sourceMappingURL=format-rtl.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-strikethrough.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-strikethrough.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatStrikethrough = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatStrikethrough);
//# sourceMappingURL=format-strikethrough.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-underline.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-underline.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatUnderline = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatUnderline);
//# sourceMappingURL=format-underline.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/format-uppercase.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/format-uppercase.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const formatUppercase = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (formatUppercase);
//# sourceMappingURL=format-uppercase.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/fullscreen.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/fullscreen.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const fullscreen = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4.2 9h1.5V5.8H9V4.2H4.2V9zm14 9.2H15v1.5h4.8V15h-1.5v3.2zM15 4.2v1.5h3.2V9h1.5V4.2H15zM5.8 15H4.2v4.8H9v-1.5H5.8V15z"
}));
/* harmony default export */ __webpack_exports__["default"] = (fullscreen);
//# sourceMappingURL=fullscreen.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/gallery.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/gallery.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gallery": function() { return /* binding */ gallery; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const gallery = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8h-1.5zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zM4.5 4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1V12l-2.3-1.7c-.3-.2-.6-.2-.9 0l-2.9 2.1L8 11.3c-.2-.1-.5-.1-.7 0l-2.9 1.5V4.6zm0 11.8v-1.8l3.2-1.7 2.4 1.2c.2.1.5.1.8-.1l2.8-2 2.8 2v2.5c0 .1-.1.1-.1.1H4.6c0-.1-.1-.2-.1-.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (gallery);
//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/globe.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/globe.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const globe = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.3c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8s-4-8.8-8.8-8.8zm6.5 5.5h-2.6C15.4 7.3 14.8 6 14 5c2 .6 3.6 2 4.5 3.8zm.7 3.2c0 .6-.1 1.2-.2 1.8h-2.9c.1-.6.1-1.2.1-1.8s-.1-1.2-.1-1.8H19c.2.6.2 1.2.2 1.8zM12 18.7c-1-.7-1.8-1.9-2.3-3.5h4.6c-.5 1.6-1.3 2.9-2.3 3.5zm-2.6-4.9c-.1-.6-.1-1.1-.1-1.8 0-.6.1-1.2.1-1.8h5.2c.1.6.1 1.1.1 1.8s-.1 1.2-.1 1.8H9.4zM4.8 12c0-.6.1-1.2.2-1.8h2.9c-.1.6-.1 1.2-.1 1.8 0 .6.1 1.2.1 1.8H5c-.2-.6-.2-1.2-.2-1.8zM12 5.3c1 .7 1.8 1.9 2.3 3.5H9.7c.5-1.6 1.3-2.9 2.3-3.5zM10 5c-.8 1-1.4 2.3-1.8 3.8H5.5C6.4 7 8 5.6 10 5zM5.5 15.3h2.6c.4 1.5 1 2.8 1.8 3.7-1.8-.6-3.5-2-4.4-3.7zM14 19c.8-1 1.4-2.2 1.8-3.7h2.6C17.6 17 16 18.4 14 19z"
}));
/* harmony default export */ __webpack_exports__["default"] = (globe);
//# sourceMappingURL=globe.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/grid.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/grid.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const grid = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.8 16.5H5c-.3 0-.5-.2-.5-.5v-6.2h6.8v6.7zm0-8.3H4.5V5c0-.3.2-.5.5-.5h6.2v6.7zm8.3 7.8c0 .3-.2.5-.5.5h-6.2v-6.8h6.8V19zm0-7.8h-6.8V4.5H19c.3 0 .5.2.5.5v6.2z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (grid);
//# sourceMappingURL=grid.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/group.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/group.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const group = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 4h-7c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-4.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h3V13c0 1.1.9 2 2 2h2.5v3zm0-4.5H11c-.3 0-.5-.2-.5-.5v-2.5H13c.3 0 .5.2.5.5v2.5zm5-.5c0 .3-.2.5-.5.5h-3V11c0-1.1-.9-2-2-2h-2.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (group);
//# sourceMappingURL=group.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/handle.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/handle.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const handle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 16.5h10V15H7v1.5zm0-9V9h10V7.5H7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (handle);
//# sourceMappingURL=handle.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/header.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/header.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const header = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (header);
//# sourceMappingURL=header.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/heading.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/heading.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const heading = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.2 5.2v13.4l5.8-4.8 5.8 4.8V5.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (heading);
//# sourceMappingURL=heading.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/help-filled.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/help-filled.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const helpFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 16v-2h2v2h-2zm2-3v-1.141A3.991 3.991 0 0016 10a4 4 0 00-8 0h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2a1 1 0 00-1 1v2h2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (helpFilled);
//# sourceMappingURL=help-filled.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/help.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/help.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const help = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (help);
//# sourceMappingURL=help.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/home.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/home.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const home = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4L4 7.9V20h16V7.9L12 4zm6.5 14.5H14V13h-4v5.5H5.5V8.8L12 5.7l6.5 3.1v9.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (home);
//# sourceMappingURL=home.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/html.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/html.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const html = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4.8 11.4H2.1V9H1v6h1.1v-2.6h2.7V15h1.1V9H4.8v2.4zm1.9-1.3h1.7V15h1.1v-4.9h1.7V9H6.7v1.1zM16.2 9l-1.5 2.7L13.3 9h-.9l-.8 6h1.1l.5-4 1.5 2.8 1.5-2.8.5 4h1.1L17 9h-.8zm3.8 5V9h-1.1v6h3.6v-1H20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (html);
//# sourceMappingURL=html.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/image.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/image.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (image);
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/inbox.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/inbox.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const inbox = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M6 5.5h12a.5.5 0 01.5.5v7H14a2 2 0 11-4 0H5.5V6a.5.5 0 01.5-.5zm-.5 9V18a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-3.5h-3.337a3.5 3.5 0 01-6.326 0H5.5zM4 13V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (inbox);
//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/info.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/info.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const info = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (info);
//# sourceMappingURL=info.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/insert-after.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/insert-after.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const insertAfter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9 12h2v-2h2V8h-2V6H9v2H7v2h2v2zm1 4c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7zm0-12c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zM3 19h14v-2H3v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (insertAfter);
//# sourceMappingURL=insert-after.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/insert-before.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/insert-before.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const insertBefore = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11 8H9v2H7v2h2v2h2v-2h2v-2h-2V8zm-1-4c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM3 1v2h14V1H3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (insertBefore);
//# sourceMappingURL=insert-before.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/institution.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/institution.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const institute = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M18.646 9H20V8l-1-.5L12 4 5 7.5 4 8v1h14.646zm-3-1.5L12 5.677 8.354 7.5h7.292zm-7.897 9.44v-6.5h-1.5v6.5h1.5zm5-6.5v6.5h-1.5v-6.5h1.5zm5 0v6.5h-1.5v-6.5h1.5zm2.252 8.81c0 .414-.334.75-.748.75H4.752a.75.75 0 010-1.5h14.5a.75.75 0 01.749.75z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (institute);
//# sourceMappingURL=institution.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/justify-center.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/justify-center.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const justifyCenter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 9h-7.2V4h-1.6v5H4v6h7.2v5h1.6v-5H20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (justifyCenter);
//# sourceMappingURL=justify-center.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/justify-left.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/justify-left.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const justifyLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9 9v6h11V9H9zM4 20h1.5V4H4v16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (justifyLeft);
//# sourceMappingURL=justify-left.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/justify-right.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/justify-right.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const justifyRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (justifyRight);
//# sourceMappingURL=justify-right.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/justify-space-between.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/justify-space-between.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const justifySpaceBetween = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9 15h6V9H9v6zm-5 5h1.5V4H4v16zM18.5 4v16H20V4h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (justifySpaceBetween);
//# sourceMappingURL=justify-space-between.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/key.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/key.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const key = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 16a4.002 4.002 0 003.8-2.75H15V16h2.5v-2.75H19v-2.5h-6.2A4.002 4.002 0 005 12a4 4 0 004 4z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (key);
//# sourceMappingURL=key.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/keyboard-close.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/keyboard-close.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const keyboardClose = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18,0 L2,0 C0.9,0 0.01,0.9 0.01,2 L0,12 C0,13.1 0.9,14 2,14 L18,14 C19.1,14 20,13.1 20,12 L20,2 C20,0.9 19.1,0 18,0 Z M18,12 L2,12 L2,2 L18,2 L18,12 Z M9,3 L11,3 L11,5 L9,5 L9,3 Z M9,6 L11,6 L11,8 L9,8 L9,6 Z M6,3 L8,3 L8,5 L6,5 L6,3 Z M6,6 L8,6 L8,8 L6,8 L6,6 Z M3,6 L5,6 L5,8 L3,8 L3,6 Z M3,3 L5,3 L5,5 L3,5 L3,3 Z M6,9 L14,9 L14,11 L6,11 L6,9 Z M12,6 L14,6 L14,8 L12,8 L12,6 Z M12,3 L14,3 L14,5 L12,5 L12,3 Z M15,6 L17,6 L17,8 L15,8 L15,6 Z M15,3 L17,3 L17,5 L15,5 L15,3 Z M10,20 L14,16 L6,16 L10,20 Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (keyboardClose);
//# sourceMappingURL=keyboard-close.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/keyboard-return.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/keyboard-return.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const keyboardReturn = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.734 16.106l2.176-2.38-1.093-1.028-3.846 4.158 3.846 4.157 1.093-1.027-2.176-2.38h2.811c1.125 0 2.25.03 3.374 0 1.428-.001 3.362-.25 4.963-1.277 1.66-1.065 2.868-2.906 2.868-5.859 0-2.479-1.327-4.896-3.65-5.93-1.82-.813-3.044-.8-4.806-.788l-.567.002v1.5c.184 0 .368 0 .553-.002 1.82-.007 2.704-.014 4.21.657 1.854.827 2.76 2.657 2.76 4.561 0 2.472-.973 3.824-2.178 4.596-1.258.807-2.864 1.04-4.163 1.04h-.02c-1.115.03-2.229 0-3.344 0H6.734z"
}));
/* harmony default export */ __webpack_exports__["default"] = (keyboardReturn);
//# sourceMappingURL=keyboard-return.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/layout.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/layout.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const layout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (layout);
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/lifesaver.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/lifesaver.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const lifesaver = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M17.375 15.656A6.47 6.47 0 0018.5 12a6.47 6.47 0 00-.943-3.374l-1.262.813c.448.749.705 1.625.705 2.561a4.977 4.977 0 01-.887 2.844l1.262.813zm-1.951 1.87l-.813-1.261A4.976 4.976 0 0112 17c-.958 0-1.852-.27-2.613-.736l-.812 1.261A6.47 6.47 0 0012 18.5a6.47 6.47 0 003.424-.974zm-8.8-1.87A6.47 6.47 0 015.5 12c0-1.235.344-2.39.943-3.373l1.261.812A4.977 4.977 0 007 12c0 1.056.328 2.036.887 2.843l-1.262.813zm2.581-7.803A4.977 4.977 0 0112 7c1.035 0 1.996.314 2.794.853l.812-1.262A6.47 6.47 0 0012 5.5a6.47 6.47 0 00-3.607 1.092l.812 1.261zM12 20a8 8 0 100-16 8 8 0 000 16zm0-4.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (lifesaver);
//# sourceMappingURL=lifesaver.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/line-dashed.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/line-dashed.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const lineDashed = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (lineDashed);
//# sourceMappingURL=line-dashed.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/line-dotted.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/line-dotted.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const lineDotted = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M5.25 11.25h1.5v1.5h-1.5v-1.5zm3 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5zm1.5 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (lineDotted);
//# sourceMappingURL=line-dotted.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/line-solid.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/line-solid.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const lineSolid = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  fill: "none"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 11.25h14v1.5H5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (lineSolid);
//# sourceMappingURL=line-solid.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/link-off.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/link-off.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const linkOff = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (linkOff);
//# sourceMappingURL=link-off.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/link.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/link.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/list-view.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/list-view.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const listView = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.8 5.2H3v1.5h10.8V5.2zm-3.6 12v1.5H21v-1.5H10.2zm7.2-6H6.6v1.5h10.8v-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (listView);
//# sourceMappingURL=list-view.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/list.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/list.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const list = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 4v1.5h16V4H4zm8 8.5h8V11h-8v1.5zM4 20h16v-1.5H4V20zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (list);
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/lock.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/lock.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const lock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M8 5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V9H18C19.2624 9 20 9.9804 20 11V19C20 20.0196 19.2624 21 18 21H6C4.73763 21 4 20.0196 4 19V11C4 9.9804 4.73763 9 6 9H8V5ZM9.5 9H14.5V5C14.5 4.17157 13.8284 3.5 13 3.5H11C10.1716 3.5 9.5 4.17157 9.5 5V9Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (lock);
//# sourceMappingURL=lock.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/login.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/login.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const login = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11 14.5l1.1 1.1 3-3 .5-.5-.6-.6-3-3-1 1 1.7 1.7H5v1.5h7.7L11 14.5zM16.8 5h-7c-1.1 0-2 .9-2 2v1.5h1.5V7c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v10c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5v-1.5H7.8V17c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (login);
//# sourceMappingURL=login.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/loop.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/loop.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const loop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.1823 11.6392C18.1823 13.0804 17.0139 14.2487 15.5727 14.2487C14.3579 14.2487 13.335 13.4179 13.0453 12.2922L13.0377 12.2625L13.0278 12.2335L12.3985 10.377L12.3942 10.3785C11.8571 8.64997 10.246 7.39405 8.33961 7.39405C5.99509 7.39405 4.09448 9.29465 4.09448 11.6392C4.09448 13.9837 5.99509 15.8843 8.33961 15.8843C8.88499 15.8843 9.40822 15.781 9.88943 15.5923L9.29212 14.0697C8.99812 14.185 8.67729 14.2487 8.33961 14.2487C6.89838 14.2487 5.73003 13.0804 5.73003 11.6392C5.73003 10.1979 6.89838 9.02959 8.33961 9.02959C9.55444 9.02959 10.5773 9.86046 10.867 10.9862L10.8772 10.9836L11.4695 12.7311C11.9515 14.546 13.6048 15.8843 15.5727 15.8843C17.9172 15.8843 19.8178 13.9837 19.8178 11.6392C19.8178 9.29465 17.9172 7.39404 15.5727 7.39404C15.0287 7.39404 14.5066 7.4968 14.0264 7.6847L14.6223 9.20781C14.9158 9.093 15.2358 9.02959 15.5727 9.02959C17.0139 9.02959 18.1823 10.1979 18.1823 11.6392Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (loop);
//# sourceMappingURL=loop.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/map-marker.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/map-marker.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const mapMarker = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 9c-.8 0-1.5.7-1.5 1.5S11.2 12 12 12s1.5-.7 1.5-1.5S12.8 9 12 9zm0-5c-3.6 0-6.5 2.8-6.5 6.2 0 .8.3 1.8.9 3.1.5 1.1 1.2 2.3 2 3.6.7 1 3 3.8 3.2 3.9l.4.5.4-.5c.2-.2 2.6-2.9 3.2-3.9.8-1.2 1.5-2.5 2-3.6.6-1.3.9-2.3.9-3.1C18.5 6.8 15.6 4 12 4zm4.3 8.7c-.5 1-1.1 2.2-1.9 3.4-.5.7-1.7 2.2-2.4 3-.7-.8-1.9-2.3-2.4-3-.8-1.2-1.4-2.3-1.9-3.3-.6-1.4-.7-2.2-.7-2.5 0-2.6 2.2-4.7 5-4.7s5 2.1 5 4.7c0 .2-.1 1-.7 2.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (mapMarker);
//# sourceMappingURL=map-marker.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/media-and-text.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/media-and-text.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const mediaAndText = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3 18h8V6H3v12zM14 7.5V9h7V7.5h-7zm0 5.3h7v-1.5h-7v1.5zm0 3.7h7V15h-7v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (mediaAndText);
//# sourceMappingURL=media-and-text.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/media.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/media.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const media = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (media);
//# sourceMappingURL=media.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/megaphone.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/megaphone.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const megaphone = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M6.863 13.644L5 13.25h-.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H5L18 6.5h2V16h-2l-3.854-.815.026.008a3.75 3.75 0 01-7.31-1.549zm1.477.313a2.251 2.251 0 004.356.921l-4.356-.921zm-2.84-3.28L18.157 8h.343v6.5h-.343L5.5 11.823v-1.146z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (megaphone);
//# sourceMappingURL=megaphone.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/menu.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/menu.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const menu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 5v1.5h14V5H5zm0 7.8h14v-1.5H5v1.5zM5 19h14v-1.5H5V19z"
}));
/* harmony default export */ __webpack_exports__["default"] = (menu);
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/mobile.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/mobile.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (desktop);
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/more-horizontal-mobile.js":
/*!******************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/more-horizontal-mobile.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moreHorizontalMobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5C6.82843 13.5 7.5 12.8284 7.5 12Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.5 12C19.5 11.1716 18.8284 10.5 18 10.5C17.1716 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1716 13.5 18 13.5C18.8284 13.5 19.5 12.8284 19.5 12Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moreHorizontalMobile);
//# sourceMappingURL=more-horizontal-mobile.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/more-horizontal.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/more-horizontal.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moreHorizontal = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11 13h2v-2h-2v2zm-6 0h2v-2H5v2zm12-2v2h2v-2h-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moreHorizontal);
//# sourceMappingURL=more-horizontal.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/more-vertical.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/more-vertical.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moreVertical = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moreVertical);
//# sourceMappingURL=more-vertical.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/more.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/more.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const more = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 9v1.5h16V9H4zm12 5.5h4V13h-4v1.5zm-6 0h4V13h-4v1.5zm-6 0h4V13H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (more);
//# sourceMappingURL=more.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/move-to.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/move-to.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const moveTo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.75 9c0-1.257-.565-2.197-1.39-2.858-.797-.64-1.827-1.017-2.815-1.247-1.802-.42-3.703-.403-4.383-.396L11 4.5V6l.177-.001c.696-.006 2.416-.02 4.028.356.887.207 1.67.518 2.216.957.52.416.829.945.829 1.688 0 .592-.167.966-.407 1.23-.255.281-.656.508-1.236.674-1.19.34-2.82.346-4.607.346h-.077c-1.692 0-3.527 0-4.942.404-.732.209-1.424.545-1.935 1.108-.526.579-.796 1.33-.796 2.238 0 1.257.565 2.197 1.39 2.858.797.64 1.827 1.017 2.815 1.247 1.802.42 3.703.403 4.383.396L13 19.5h.714V22L18 18.5 13.714 15v3H13l-.177.001c-.696.006-2.416.02-4.028-.356-.887-.207-1.67-.518-2.216-.957-.52-.416-.829-.945-.829-1.688 0-.592.167-.966.407-1.23.255-.281.656-.508 1.237-.674 1.189-.34 2.819-.346 4.606-.346h.077c1.692 0 3.527 0 4.941-.404.732-.209 1.425-.545 1.936-1.108.526-.579.796-1.33.796-2.238z"
}));
/* harmony default export */ __webpack_exports__["default"] = (moveTo);
//# sourceMappingURL=move-to.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/navigation.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/navigation.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const navigation = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (navigation);
//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/next.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/next.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const next = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (next);
//# sourceMappingURL=next.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/overlay-text.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/overlay-text.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const overlayText = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12-9.8c.4 0 .8-.3.9-.7l1.1-3h3.6l.5 1.7h1.9L13 9h-2.2l-3.4 9.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12H20V6c0-1.1-.9-2-2-2zm-6 7l1.4 3.9h-2.7L12 11z"
}));
/* harmony default export */ __webpack_exports__["default"] = (overlayText);
//# sourceMappingURL=overlay-text.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/page-break.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/page-break.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pageBreak = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7.8 6c0-.7.6-1.2 1.2-1.2h6c.7 0 1.2.6 1.2 1.2v3h1.5V6c0-1.5-1.2-2.8-2.8-2.8H9C7.5 3.2 6.2 4.5 6.2 6v3h1.5V6zm8.4 11c0 .7-.6 1.2-1.2 1.2H9c-.7 0-1.2-.6-1.2-1.2v-3H6.2v3c0 1.5 1.2 2.8 2.8 2.8h6c1.5 0 2.8-1.2 2.8-2.8v-3h-1.5v3zM4 11v1h16v-1H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pageBreak);
//# sourceMappingURL=page-break.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/page.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/page.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const page = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 5.5h10a.5.5 0 01.5.5v12a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3.75H8v1.5h8v-1.5zM8 11h8v1.5H8V11zm6 3.25H8v1.5h6v-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (page);
//# sourceMappingURL=page.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/pages.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/pages.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pages = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 13.8h6v-1.5H7v1.5zM18 16V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zM5.5 16V4c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5zM7 10.5h8V9H7v1.5zm0-3.3h8V5.8H7v1.4zM20.2 6v13c0 .7-.6 1.2-1.2 1.2H8v1.5h11c1.5 0 2.7-1.2 2.7-2.8V6h-1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pages);
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/paragraph.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/paragraph.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const paragraph = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (paragraph);
//# sourceMappingURL=paragraph.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/payment.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/payment.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const payment = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M5.5 9.5v-2h13v2h-13zm0 3v4h13v-4h-13zM4 7a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (payment);
//# sourceMappingURL=payment.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/pencil.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/pencil.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pencil = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pencil);
//# sourceMappingURL=pencil.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/people.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/people.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const people = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  fillRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (people);
//# sourceMappingURL=people.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/percent.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/percent.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const percent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M6.5 8a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM8 5a3 3 0 100 6 3 3 0 000-6zm6.5 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6zM5.47 17.41a.75.75 0 001.06 1.06L18.47 6.53a.75.75 0 10-1.06-1.06L5.47 17.41z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (percent);
//# sourceMappingURL=percent.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/pin.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/pin.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pin = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m21.5 9.1-6.6-6.6-4.2 5.6c-1.2-.1-2.4.1-3.6.7-.1 0-.1.1-.2.1-.5.3-.9.6-1.2.9l3.7 3.7-5.7 5.7v1.1h1.1l5.7-5.7 3.7 3.7c.4-.4.7-.8.9-1.2.1-.1.1-.2.2-.3.6-1.1.8-2.4.6-3.6l5.6-4.1zm-7.3 3.5.1.9c.1.9 0 1.8-.4 2.6l-6-6c.8-.4 1.7-.5 2.6-.4l.9.1L15 4.9 19.1 9l-4.9 3.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pin);
//# sourceMappingURL=pin.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/plugins.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/plugins.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plugins = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.5 4v4h3V4H15v4h1.5a1 1 0 011 1v4l-3 4v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2l-3-4V9a1 1 0 011-1H9V4h1.5zm.5 12.5v2h2v-2l3-4v-3H8v3l3 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plugins);
//# sourceMappingURL=plugins.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/plus-circle-filled.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plusCircleFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M2 12C2 6.44444 6.44444 2 12 2C17.5556 2 22 6.44444 22 12C22 17.5556 17.5556 22 12 22C6.44444 22 2 17.5556 2 12ZM13 11V7H11V11H7V13H11V17H13V13H17V11H13Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plusCircleFilled);
//# sourceMappingURL=plus-circle-filled.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/plus-circle.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/plus-circle.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plusCircle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plusCircle);
//# sourceMappingURL=plus-circle.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/plus.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const plus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["default"] = (plus);
//# sourceMappingURL=plus.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/position-center.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/position-center.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const positionCenter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 9v6h10V9H7zM5 19.8h14v-1.5H5v1.5zM5 4.3v1.5h14V4.3H5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (positionCenter);
//# sourceMappingURL=position-center.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/position-left.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/position-left.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const positionLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 9v6h14V9H4zm8-4.8H4v1.5h8V4.2zM4 19.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (positionLeft);
//# sourceMappingURL=position-left.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/position-right.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/position-right.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const positionRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6 15h14V9H6v6zm6-10.8v1.5h8V4.2h-8zm0 15.6h8v-1.5h-8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (positionRight);
//# sourceMappingURL=position-right.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-author.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-author.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postAuthor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 4.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm2.25 7.5v-1A2.75 2.75 0 0011 8.25H7A2.75 2.75 0 004.25 11v1h1.5v-1c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v1h1.5zM4 20h9v-1.5H4V20zm16-4H4v-1.5h16V16z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (postAuthor);
//# sourceMappingURL=post-author.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-categories.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-categories.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postCategories = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 4H4v1.5h16V4zm-2 9h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3zM4 9.5h9V8H4v1.5zM9 13H6c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm.5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (postCategories);
//# sourceMappingURL=post-categories.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-comments-count.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-comments-count.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postCommentsCount = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 8H4v1.5h9V8zM4 4v1.5h16V4H4zm9 8H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1zm-2.2 6.6H7l1.6-2.2c.3-.4.5-.7.6-.9.1-.2.2-.4.2-.5 0-.2-.1-.3-.1-.4-.1-.1-.2-.1-.4-.1s-.4 0-.6.1c-.3.1-.5.3-.7.4l-.2.2-.2-1.2.1-.1c.3-.2.5-.3.8-.4.3-.1.6-.1.9-.1.3 0 .6.1.9.2.2.1.4.3.6.5.1.2.2.5.2.7 0 .3-.1.6-.2.9-.1.3-.4.7-.7 1.1l-.5.6h1.6v1.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postCommentsCount);
//# sourceMappingURL=post-comments-count.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-comments-form.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-comments-form.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postCommentsForm = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 8H4v1.5h9V8zM4 4v1.5h16V4H4zm9 8H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1V13c0-.6-.4-1-1-1zm-.5 6.6H6.7l-1.2 1.2v-6.3h7v5.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postCommentsForm);
//# sourceMappingURL=post-comments-form.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-comments.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-comments.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postComments = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14 10.1V4c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1zm-1.5-.5H6.7l-1.2 1.2V4.5h7v5.1zM19 12h-8c-.6 0-1 .4-1 1v6.1c0 .6.4 1 1 1h5.7l1.8 1.8c.1.2.4.3.6.3.1 0 .2 0 .3-.1.4-.1.6-.5.6-.8V13c0-.6-.4-1-1-1zm-.5 7.8l-1.2-1.2h-5.8v-5.1h7v6.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postComments);
//# sourceMappingURL=post-comments.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-content.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-content.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 20h16v-1.5H4V20zm0-4.8h16v-1.5H4v1.5zm0-6.4v1.5h16V8.8H4zM16 4H4v1.5h12V4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postContent);
//# sourceMappingURL=post-content.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-date.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-date.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postDate = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.696 13.972c.356-.546.599-.958.728-1.235a1.79 1.79 0 00.203-.783c0-.264-.077-.47-.23-.618-.148-.153-.354-.23-.618-.23-.295 0-.569.07-.82.212a3.413 3.413 0 00-.738.571l-.147-1.188c.289-.234.59-.41.903-.526.313-.117.66-.175 1.041-.175.375 0 .695.08.959.24.264.153.46.362.59.626.135.265.203.556.203.876 0 .362-.08.734-.24 1.115-.154.381-.427.87-.82 1.466l-.756 1.152H14v1.106h-4l1.696-2.609z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19.5 7h-15v12a.5.5 0 00.5.5h14a.5.5 0 00.5-.5V7zM3 7V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postDate);
//# sourceMappingURL=post-date.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-excerpt.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-excerpt.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postExcerpt = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.75 9.333c0 .521-.102.977-.327 1.354-.23.386-.555.628-.893.774-.545.234-1.183.227-1.544.222l-.12-.001v-1.5h.123c.414.001.715.002.948-.099a.395.395 0 00.199-.166c.05-.083.114-.253.114-.584V7.2H8.8V4h3.95v5.333zM7.95 9.333c0 .521-.102.977-.327 1.354-.23.386-.555.628-.893.774-.545.234-1.183.227-1.544.222l-.12-.001v-1.5h.123c.414.001.715.002.948-.099a.394.394 0 00.198-.166c.05-.083.115-.253.115-.584V7.2H4V4h3.95v5.333zM13 20H4v-1.5h9V20zM20 16H4v-1.5h16V16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postExcerpt);
//# sourceMappingURL=post-excerpt.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-featured-image.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-featured-image.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postFeaturedImage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 3H5c-.6 0-1 .4-1 1v7c0 .5.4 1 1 1h14c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1zM5.5 10.5v-.4l1.8-1.3 1.3.8c.3.2.7.2.9-.1L11 8.1l2.4 2.4H5.5zm13 0h-2.9l-4-4c-.3-.3-.8-.3-1.1 0L8.9 8l-1.2-.8c-.3-.2-.6-.2-.9 0l-1.3 1V4.5h13v6zM4 20h9v-1.5H4V20zm0-4h16v-1.5H4V16z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postFeaturedImage);
//# sourceMappingURL=post-featured-image.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-list.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-list.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postList = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postList);
//# sourceMappingURL=post-list.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-terms.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-terms.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postTerms = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M8.1 12.3c.1.1.3.3.5.3.2.1.4.1.6.1.2 0 .4 0 .6-.1.2-.1.4-.2.5-.3l3-3c.3-.3.5-.7.5-1.1 0-.4-.2-.8-.5-1.1L9.7 3.5c-.1-.2-.3-.3-.5-.3H5c-.4 0-.8.4-.8.8v4.2c0 .2.1.4.2.5l3.7 3.6zM5.8 4.8h3.1l3.4 3.4v.1l-3 3 .5.5-.7-.5-3.3-3.4V4.8zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postTerms);
//# sourceMappingURL=post-terms.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post-title.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post-title.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postTitle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 14.5h16V16H4zM4 18.5h9V20H4zM4 4h3c2 0 3 .86 3 2.583 0 .891-.253 1.554-.76 1.988-.505.435-1.24.652-2.204.652H5.542V12H4V4zm2.855 4c.53 0 .924-.114 1.18-.343.266-.228.398-.579.398-1.051 0-.473-.132-.82-.397-1.04-.265-.229-.67-.343-1.217-.343H5.542V8h1.313z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postTitle);
//# sourceMappingURL=post-title.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/post.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/post.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const post = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m7.3 9.7 1.4 1.4c.2-.2.3-.3.4-.5 0 0 0-.1.1-.1.3-.5.4-1.1.3-1.6L12 7 9 4 7.2 6.5c-.6-.1-1.1 0-1.6.3 0 0-.1 0-.1.1-.3.1-.4.2-.6.4l1.4 1.4L4 11v1h1l2.3-2.3zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (post);
//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/preformatted.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/preformatted.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const preformatted = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 16.5h6V15H7v1.5zm4-4h6V11h-6v1.5zM9 11H7v1.5h2V11zm6 5.5h2V15h-2v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (preformatted);
//# sourceMappingURL=preformatted.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/previous.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/previous.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const previous = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (previous);
//# sourceMappingURL=previous.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/pull-left.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/pull-left.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pullLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 18h6V6H4v12zm9-9.5V10h7V8.5h-7zm0 7h7V14h-7v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pullLeft);
//# sourceMappingURL=pull-left.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/pull-right.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/pull-right.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pullRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14 6v12h6V6h-6zM4 10h7V8.5H4V10zm0 5.5h7V14H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pullRight);
//# sourceMappingURL=pull-right.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/pullquote.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/pullquote.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const pullquote = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 8H6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm.5 6c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-4c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v4zM4 4v1.5h16V4H4zm0 16h16v-1.5H4V20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pullquote);
//# sourceMappingURL=pullquote.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/query-pagination-next.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/query-pagination-next.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const queryPaginationNext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 13.5h3v-3H5v3zm5 0h3v-3h-3v3zM17 9l-1 1 2 2-2 2 1 1 3-3-3-3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (queryPaginationNext);
//# sourceMappingURL=query-pagination-next.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/query-pagination-numbers.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/query-pagination-numbers.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const queryPaginationNumbers = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 13.5h6v-3H4v3zm8.2-2.5.8-.3V14h1V9.3l-2.2.7.4 1zm7.1-1.2c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3-.1-.8-.3-1.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (queryPaginationNumbers);
//# sourceMappingURL=query-pagination-numbers.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/query-pagination-previous.js":
/*!*********************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/query-pagination-previous.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const queryPaginationPrevious = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16 10.5v3h3v-3h-3zm-5 3h3v-3h-3v3zM7 9l-3 3 3 3 1-1-2-2 2-2-1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (queryPaginationPrevious);
//# sourceMappingURL=query-pagination-previous.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/query-pagination.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/query-pagination.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const queryPagination = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 13.5h6v-3H4v3zm8 0h3v-3h-3v3zm5-3v3h3v-3h-3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (queryPagination);
//# sourceMappingURL=query-pagination.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/query-title.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/query-title.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const queryTitle = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4zm1.3-2.9c.6.3 1.3.5 2 .5.8 0 1.4-.2 2-.5.1 0 .1-.1.2-.2l.8.7.9-1-.8-.7.3-.3a5.09 5.09 0 0 0 0-4.4c-.2-.6-.7-1-1.3-1.4-.6-.3-1.3-.5-2-.5-.8 0-1.4.2-2 .5-.7.4-1.1.8-1.5 1.5-.3.6-.5 1.3-.5 2.2 0 .8.2 1.6.5 2.2.4.6.8 1.1 1.4 1.4zm-.1-5c.2-.4.5-.7.8-1s.8-.4 1.3-.4 1 .1 1.3.4.6.6.8 1c.3.4.4.8.4 1.4 0 .5-.1 1-.3 1.4v.1l-1-.9-.9 1 .9.9c-.3.2-.7.3-1.2.3s-1-.1-1.3-.4c-.4-.2-.6-.6-.8-1C5 9 4.9 8.5 4.9 8c0-.6.1-1 .3-1.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (queryTitle);
//# sourceMappingURL=query-title.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/quote.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/quote.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const quote = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (quote);
//# sourceMappingURL=quote.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/receipt.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/receipt.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const receipt = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M16.83 6.342l.602.3.625-.25.443-.176v12.569l-.443-.178-.625-.25-.603.301-1.444.723-2.41-.804-.475-.158-.474.158-2.41.803-1.445-.722-.603-.3-.625.25-.443.177V6.215l.443.178.625.25.603-.301 1.444-.722 2.41.803.475.158.474-.158 2.41-.803 1.445.722zM20 4l-1.5.6-1 .4-2-1-3 1-3-1-2 1-1-.4L5 4v17l1.5-.6 1-.4 2 1 3-1 3 1 2-1 1 .4 1.5.6V4zm-3.5 6.25v-1.5h-8v1.5h8zm0 3v-1.5h-8v1.5h8zm-8 3v-1.5h8v1.5h-8z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (receipt);
//# sourceMappingURL=receipt.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/redo.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/redo.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const redo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (redo);
//# sourceMappingURL=redo.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/remove-bug.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/remove-bug.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const removeBug = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M8.45474 21.2069L16.4547 3.7069L15.5453 3.29114L14.2837 6.05081C13.5991 5.69873 12.8228 5.49999 12 5.49999C10.9385 5.49999 9.95431 5.83076 9.1448 6.39485L7.18994 4.44L6.12928 5.50066L8.05556 7.42694C7.49044 8.15127 7.12047 9.0353 7.02469 9.99999H5V11.5H7V13H5V14.5H7.10002C7.35089 15.7359 8.0576 16.8062 9.03703 17.5279L7.54526 20.7911L8.45474 21.2069ZM9.68024 16.1209C8.95633 15.4796 8.5 14.5431 8.5 13.5V10.5C8.5 8.567 10.067 6.99999 12 6.99999C12.6003 6.99999 13.1653 7.15111 13.659 7.41738L9.68024 16.1209ZM15.3555 9.50155L16.1645 7.73191C16.6053 8.39383 16.8926 9.16683 16.9753 9.99999H19V11.5H17V13H19V14.5H16.9C16.4367 16.7822 14.419 18.5 12 18.5C11.7508 18.5 11.5058 18.4818 11.2664 18.4466L11.928 16.9993C11.9519 16.9998 11.9759 17 12 17C13.933 17 15.5 15.433 15.5 13.5V10.5C15.5 10.1531 15.4495 9.81794 15.3555 9.50155Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (removeBug);
//# sourceMappingURL=remove-bug.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/remove-submenu.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/remove-submenu.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const removeSubmenu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "m13.955 20.748 8-17.5-.91-.416L19.597 6H13.5v1.5h5.411l-1.6 3.5H13.5v1.5h3.126l-1.6 3.5H13.5l.028 1.5h.812l-1.295 2.832.91.416ZM17.675 16l-.686 1.5h4.539L21.5 16h-3.825Zm2.286-5-.686 1.5H21.5V11h-1.54ZM2 12c0 3.58 2.42 5.5 6 5.5h.5V19l3-2.5-3-2.5v2H8c-2.48 0-4.5-1.52-4.5-4S5.52 7.5 8 7.5h3.5V6H8c-3.58 0-6 2.42-6 6Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (removeSubmenu);
//# sourceMappingURL=remove-submenu.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/replace.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/replace.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const replace = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16 10h4c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1zm-8 4H4c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1zm10-2.6L14.5 15l1.1 1.1 1.7-1.7c-.1 1.1-.3 2.3-.9 2.9-.3.3-.7.5-1.3.5h-4.5v1.5H15c.9 0 1.7-.3 2.3-.9 1-1 1.3-2.7 1.4-4l1.8 1.8 1.1-1.1-3.6-3.7zM6.8 9.7c.1-1.1.3-2.3.9-2.9.4-.4.8-.6 1.3-.6h4.5V4.8H9c-.9 0-1.7.3-2.3.9-1 1-1.3 2.7-1.4 4L3.5 8l-1 1L6 12.6 9.5 9l-1-1-1.7 1.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (replace);
//# sourceMappingURL=replace.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/reset.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/reset.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const reset = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 11.5h10V13H7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (reset);
//# sourceMappingURL=reset.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/resize-corner-n-e.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const resizeCornerNE = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.5 4.2v1.6h4.7L5.8 17.2V12H4.2v7.8H12v-1.6H6.8L18.2 6.8v4.7h1.6V4.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (resizeCornerNE);
//# sourceMappingURL=resize-corner-n-e.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/reusable-block.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/reusable-block.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const reusableBlock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7 7.2h8.2L13.5 9l1.1 1.1 3.6-3.6-3.5-4-1.1 1 1.9 2.3H7c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.2-.5zm13.8 4V11h-1.5v.3c0 1.1 0 3.5-1 4.5-.3.3-.7.5-1.3.5H8.8l1.7-1.7-1.1-1.1L5.9 17l3.5 4 1.1-1-1.9-2.3H17c.9 0 1.7-.3 2.3-.9 1.5-1.4 1.5-4.2 1.5-5.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (reusableBlock);
//# sourceMappingURL=reusable-block.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/rotate-left.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/rotate-left.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const rotateLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (rotateLeft);
//# sourceMappingURL=rotate-left.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/rotate-right.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/rotate-right.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const rotateRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M15.1 4.8l-3-2.5V4c-4.4 0-8 3.6-8 8 0 3.7 2.5 6.9 6 7.7.3.1.6.1 1 .2l.2-1.5c-.4 0-.7-.1-1.1-.2l-.1.2v-.2c-2.6-.8-4.5-3.3-4.5-6.2 0-3.6 2.9-6.5 6.5-6.5v1.8l3-2.5zM20 11c-.2-1.4-.7-2.7-1.6-3.8l-1.2.8c.7.9 1.1 2 1.3 3.1L20 11zm-1.5 1.8c-.1.5-.2 1.1-.4 1.6s-.5 1-.8 1.5l1.2.9c.4-.5.8-1.1 1-1.8s.5-1.3.5-2l-1.5-.2zm-5.6 5.6l.2 1.5c1.4-.2 2.7-.7 3.8-1.6l-.9-1.1c-.9.7-2 1.1-3.1 1.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (rotateRight);
//# sourceMappingURL=rotate-right.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/rss.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/rss.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const rss = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 10.2h-.8v1.5H5c1.9 0 3.8.8 5.1 2.1 1.4 1.4 2.1 3.2 2.1 5.1v.8h1.5V19c0-2.3-.9-4.5-2.6-6.2-1.6-1.6-3.8-2.6-6.1-2.6zm10.4-1.6C12.6 5.8 8.9 4.2 5 4.2h-.8v1.5H5c3.5 0 6.9 1.4 9.4 3.9s3.9 5.8 3.9 9.4v.8h1.5V19c0-3.9-1.6-7.6-4.4-10.4zM4 20h3v-3H4v3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (rss);
//# sourceMappingURL=rss.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/search.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/search.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const search = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.5 6C10.5 6 8 8.5 8 11.5c0 1.1.3 2.1.9 3l-3.4 3 1 1.1 3.4-2.9c1 .9 2.2 1.4 3.6 1.4 3 0 5.5-2.5 5.5-5.5C19 8.5 16.5 6 13.5 6zm0 9.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (search);
//# sourceMappingURL=search.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/separator.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/separator.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const separator = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.2 7v4H3.8V7H2.2v9h1.6v-3.5h16.4V16h1.6V7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (separator);
//# sourceMappingURL=separator.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/settings.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/settings.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (settings);
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/share.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/share.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const share = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9 11.8l6.1-4.5c.1.4.4.7.9.7h2c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1v.4l-6.4 4.8c-.2-.1-.4-.2-.6-.2H6c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h2c.2 0 .4-.1.6-.2l6.4 4.8v.4c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-2c-.5 0-.8.3-.9.7L9 12.2v-.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (share);
//# sourceMappingURL=share.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/shield.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/shield.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const shield = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.176l6.75 3.068v4.574c0 3.9-2.504 7.59-6.035 8.755a2.283 2.283 0 01-1.43 0c-3.53-1.164-6.035-4.856-6.035-8.755V6.244L12 3.176zM6.75 7.21v3.608c0 3.313 2.145 6.388 5.005 7.33.159.053.331.053.49 0 2.86-.942 5.005-4.017 5.005-7.33V7.21L12 4.824 6.75 7.21z",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (shield);
//# sourceMappingURL=shield.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/shipping.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/shipping.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const shipping = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z"
}));
/* harmony default export */ __webpack_exports__["default"] = (shipping);
//# sourceMappingURL=shipping.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/shortcode.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/shortcode.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const shortcode = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16 4.2v1.5h2.5v12.5H16v1.5h4V4.2h-4zM4.2 19.8h4v-1.5H5.8V5.8h2.5V4.2h-4l-.1 15.6zm5.1-3.1l1.4.6 4-10-1.4-.6-4 10z"
}));
/* harmony default export */ __webpack_exports__["default"] = (shortcode);
//# sourceMappingURL=shortcode.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/sidebar.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/sidebar.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const sidebar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (sidebar);
//# sourceMappingURL=sidebar.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/site-logo.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/site-logo.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const siteLogo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 1.5c4.1 0 7.5 3.4 7.5 7.5v.1c-1.4-.8-3.3-1.7-3.4-1.8-.2-.1-.5-.1-.8.1l-2.9 2.1L9 11.3c-.2-.1-.4 0-.6.1l-3.7 2.2c-.1-.5-.2-1-.2-1.5 0-4.2 3.4-7.6 7.5-7.6zm0 15c-3.1 0-5.7-1.9-6.9-4.5l3.7-2.2 3.5 1.2c.2.1.5 0 .7-.1l2.9-2.1c.8.4 2.5 1.2 3.5 1.9-.9 3.3-3.9 5.8-7.4 5.8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (siteLogo);
//# sourceMappingURL=site-logo.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/stack.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/stack.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const stack = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.2 8v11c0 .7-.6 1.2-1.2 1.2H6v1.5h13c1.5 0 2.7-1.2 2.7-2.8V8zM18 16.4V4.6c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v11.8c0 .9.7 1.6 1.6 1.6h11.8c.9 0 1.6-.7 1.6-1.6zm-13.5 0V4.6c0-.1.1-.1.1-.1h11.8c.1 0 .1.1.1.1v11.8c0 .1-.1.1-.1.1H4.6l-.1-.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stack);
//# sourceMappingURL=stack.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/star-empty.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/star-empty.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starEmpty = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (starEmpty);
//# sourceMappingURL=star-empty.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/star-filled.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/star-filled.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["default"] = (starFilled);
//# sourceMappingURL=star-filled.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/star-half.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/star-half.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const starHalf = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M9.518 8.783a.25.25 0 00.188-.137l2.069-4.192a.25.25 0 01.448 0l2.07 4.192a.25.25 0 00.187.137l4.626.672a.25.25 0 01.139.427l-3.347 3.262a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.363.264l-4.137-2.176a.25.25 0 00-.233 0l-4.138 2.175a.25.25 0 01-.362-.263l.79-4.607a.25.25 0 00-.072-.222L4.753 9.882a.25.25 0 01.14-.427l4.625-.672zM12 14.533c.28 0 .559.067.814.2l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39v7.143z"
}));
/* harmony default export */ __webpack_exports__["default"] = (starHalf);
//# sourceMappingURL=star-half.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/store.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/store.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const store = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  fillRule: "evenodd",
  d: "M19.75 11H21V8.667L19.875 4H4.125L3 8.667V11h1.25v8.75h15.5V11zm-1.5 0H5.75v7.25H10V13h4v5.25h4.25V11zm-5.5-5.5h2.067l.486 3.24.028.76H12.75v-4zm-3.567 0h2.067v4H8.669l.028-.76.486-3.24zm7.615 3.1l-.464-3.1h2.36l.806 3.345V9.5h-2.668l-.034-.9zM7.666 5.5h-2.36L4.5 8.845V9.5h2.668l.034-.9.464-3.1z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["default"] = (store);
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/stretch-full-width.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/stretch-full-width.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const stretchFullWidth = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 4v11h14V4H5zm3 15.8h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stretchFullWidth);
//# sourceMappingURL=stretch-full-width.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/stretch-wide.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/stretch-wide.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const stretchWide = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 9v6h14V9H5zm11-4.8H8v1.5h8V4.2zM8 19.8h8v-1.5H8v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (stretchWide);
//# sourceMappingURL=stretch-wide.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/styles.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/styles.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": function() { return /* binding */ styles; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const styles = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (styles);
//# sourceMappingURL=styles.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/subscript.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/subscript.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const subscript = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (subscript);
//# sourceMappingURL=subscript.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/superscript.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/superscript.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const superscript = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (superscript);
//# sourceMappingURL=superscript.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/swatch.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/swatch.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const swatch = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 17.7c.4.5.8.9 1.2 1.2l1.1-1.4c-.4-.3-.7-.6-1-1L5 17.7zM5 6.3l1.4 1.1c.3-.4.6-.7 1-1L6.3 5c-.5.4-.9.8-1.3 1.3zm.1 7.8l-1.7.5c.2.6.4 1.1.7 1.6l1.5-.8c-.2-.4-.4-.8-.5-1.3zM4.8 12v-.7L3 11.1v1.8l1.7-.2c.1-.2.1-.5.1-.7zm3 7.9c.5.3 1.1.5 1.6.7l.5-1.7c-.5-.1-.9-.3-1.3-.5l-.8 1.5zM19 6.3c-.4-.5-.8-.9-1.2-1.2l-1.1 1.4c.4.3.7.6 1 1L19 6.3zm-.1 3.6l1.7-.5c-.2-.6-.4-1.1-.7-1.6l-1.5.8c.2.4.4.8.5 1.3zM5.6 8.6l-1.5-.8c-.3.5-.5 1-.7 1.6l1.7.5c.1-.5.3-.9.5-1.3zm2.2-4.5l.8 1.5c.4-.2.8-.4 1.3-.5l-.5-1.7c-.6.2-1.1.4-1.6.7zm8.8 13.5l1.1 1.4c.5-.4.9-.8 1.2-1.2l-1.4-1.1c-.2.3-.5.6-.9.9zm1.8-2.2l1.5.8c.3-.5.5-1.1.7-1.6l-1.7-.5c-.1.5-.3.9-.5 1.3zm2.6-4.3l-1.7.2v1.4l1.7.2V12v-.9zM11.1 3l.2 1.7h1.4l.2-1.7h-1.8zm3 2.1c.5.1.9.3 1.3.5l.8-1.5c-.5-.3-1.1-.5-1.6-.7l-.5 1.7zM12 19.2h-.7l-.2 1.8h1.8l-.2-1.7c-.2-.1-.5-.1-.7-.1zm2.1-.3l.5 1.7c.6-.2 1.1-.4 1.6-.7l-.8-1.5c-.4.2-.8.4-1.3.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (swatch);
//# sourceMappingURL=swatch.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/symbol-filled.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/symbol-filled.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const symbolFilled = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (symbolFilled);
//# sourceMappingURL=symbol-filled.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/symbol.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/symbol.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const symbol = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
}));
/* harmony default export */ __webpack_exports__["default"] = (symbol);
//# sourceMappingURL=symbol.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/table-column-after.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/table-column-after.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableColumnAfter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableColumnAfter);
//# sourceMappingURL=table-column-after.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/table-column-before.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/table-column-before.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableColumnBefore = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableColumnBefore);
//# sourceMappingURL=table-column-before.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/table-column-delete.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/table-column-delete.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableColumnDelete = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableColumnDelete);
//# sourceMappingURL=table-column-delete.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/table-row-after.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/table-row-after.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableRowAfter = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableRowAfter);
//# sourceMappingURL=table-row-after.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/table-row-before.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/table-row-before.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableRowBefore = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84zM6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableRowBefore);
//# sourceMappingURL=table-row-before.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/table-row-delete.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/table-row-delete.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tableRowDelete = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tableRowDelete);
//# sourceMappingURL=table-row-delete.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/table.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/table.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const table = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 6v11.5h16V6H4zm1.5 1.5h6V11h-6V7.5zm0 8.5v-3.5h6V16h-6zm13 0H13v-3.5h5.5V16zM13 11V7.5h5.5V11H13z"
}));
/* harmony default export */ __webpack_exports__["default"] = (table);
//# sourceMappingURL=table.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/tablet.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/tablet.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tablet);
//# sourceMappingURL=tablet.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/tag.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/tag.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tag = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.1 11.2l-6.7-6.7c-.1-.1-.3-.2-.5-.2H5c-.4-.1-.8.3-.8.7v7.8c0 .2.1.4.2.5l6.7 6.7c.2.2.5.4.7.5s.6.2.9.2c.3 0 .6-.1.9-.2.3-.1.5-.3.8-.5l5.6-5.6c.4-.4.7-1 .7-1.6.1-.6-.2-1.2-.6-1.6zM19 13.4L13.4 19c-.1.1-.2.1-.3.2-.2.1-.4.1-.6 0-.1 0-.2-.1-.3-.2l-6.5-6.5V5.8h6.8l6.5 6.5c.2.2.2.4.2.6 0 .1 0 .3-.2.5zM9 8c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tag);
//# sourceMappingURL=tag.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/term-description.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/term-description.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tag = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.08 10.103h2.914L9.657 12h1.417L8.23 4H6.846L4 12h1.417l.663-1.897Zm1.463-4.137.994 2.857h-2l1.006-2.857ZM11 16H4v-1.5h7V16Zm1 0h8v-1.5h-8V16Zm-4 4H4v-1.5h4V20Zm7-1.5V20H9v-1.5h6Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tag);
//# sourceMappingURL=term-description.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/text-color.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/text-color.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const textColor = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (textColor);
//# sourceMappingURL=text-color.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/tip.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/tip.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tip = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 15.8c-3.7 0-6.8-3-6.8-6.8s3-6.8 6.8-6.8c3.7 0 6.8 3 6.8 6.8s-3.1 6.8-6.8 6.8zm0-12C9.1 3.8 6.8 6.1 6.8 9s2.4 5.2 5.2 5.2c2.9 0 5.2-2.4 5.2-5.2S14.9 3.8 12 3.8zM8 17.5h8V19H8zM10 20.5h4V22h-4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tip);
//# sourceMappingURL=tip.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/title.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/title.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const title = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M5 4v3h5.5v12h3V7H19V4H5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (title);
//# sourceMappingURL=title.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/tool.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/tool.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const tool = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.103 7.128l2.26-2.26a4 4 0 00-5.207 4.804L5.828 15a2 2 0 102.828 2.828l5.329-5.328a4 4 0 004.804-5.208l-2.261 2.26-1.912-.512-.513-1.912zm-7.214 9.64a.5.5 0 11.707-.707.5.5 0 01-.707.707z"
}));
/* harmony default export */ __webpack_exports__["default"] = (tool);
//# sourceMappingURL=tool.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/trash.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/trash.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const trash = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (trash);
//# sourceMappingURL=trash.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/trending-down.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/trending-down.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const trendingDown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4.195 8.245a.75.75 0 011.06-.05l5.004 4.55 4.025-3.521L19 13.939V10.75h1.5v5.75h-5.75V15h3.19l-3.724-3.723-3.975 3.478-5.995-5.45a.75.75 0 01-.051-1.06z"
}));
/* harmony default export */ __webpack_exports__["default"] = (trendingDown);
//# sourceMappingURL=trending-down.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/trending-up.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/trending-up.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const trendingUp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M3.445 16.505a.75.75 0 001.06.05l5.005-4.55 4.024 3.521 4.716-4.715V14h1.5V8.25H14v1.5h3.19l-3.724 3.723L9.49 9.995l-5.995 5.45a.75.75 0 00-.05 1.06z"
}));
/* harmony default export */ __webpack_exports__["default"] = (trendingUp);
//# sourceMappingURL=trending-up.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/typography.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/typography.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const typography = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (typography);
//# sourceMappingURL=typography.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/undo.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/undo.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const undo = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (undo);
//# sourceMappingURL=undo.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/ungroup.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/ungroup.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const ungroup = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 4h-7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 9c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5v7zm-5 5c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5v-7c0-.3.2-.5.5-.5h1V9H6c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-1h-1.5v1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (ungroup);
//# sourceMappingURL=ungroup.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/unlock.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/unlock.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const unlock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18 9h-2V5c0-1.7-1.3-3-3-3h-2C9.3 2 8 3.3 8 5v1h1.5V5c0-.8.7-1.5 1.5-1.5h2c.8 0 1.5.7 1.5 1.5v4H6c-1.3 0-2 1-2 2v8c0 1 .7 2 2 2h12c1.3 0 2-1 2-2v-8c0-1-.7-2-2-2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (unlock);
//# sourceMappingURL=unlock.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/update.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/update.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const update = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"
}));
/* harmony default export */ __webpack_exports__["default"] = (update);
//# sourceMappingURL=update.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/upload.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/upload.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const upload = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (upload);
//# sourceMappingURL=upload.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/verse.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/verse.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const verse = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M17.8 2l-.9.3c-.1 0-3.6 1-5.2 2.1C10 5.5 9.3 6.5 8.9 7.1c-.6.9-1.7 4.7-1.7 6.3l-.9 2.3c-.2.4 0 .8.4 1 .1 0 .2.1.3.1.3 0 .6-.2.7-.5l.6-1.5c.3 0 .7-.1 1.2-.2.7-.1 1.4-.3 2.2-.5.8-.2 1.6-.5 2.4-.8.7-.3 1.4-.7 1.9-1.2s.8-1.2 1-1.9c.2-.7.3-1.6.4-2.4.1-.8.1-1.7.2-2.5 0-.8.1-1.5.2-2.1V2zm-1.9 5.6c-.1.8-.2 1.5-.3 2.1-.2.6-.4 1-.6 1.3-.3.3-.8.6-1.4.9-.7.3-1.4.5-2.2.8-.6.2-1.3.3-1.8.4L15 7.5c.3-.3.6-.7 1-1.1 0 .4 0 .8-.1 1.2zM6 20h8v-1.5H6V20z"
}));
/* harmony default export */ __webpack_exports__["default"] = (verse);
//# sourceMappingURL=verse.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/video.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/video.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const video = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"
}));
/* harmony default export */ __webpack_exports__["default"] = (video);
//# sourceMappingURL=video.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/warning.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/warning.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const warning = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm1.13 9.38l.35-6.46H8.52l.35 6.46h2.26zm-.09 3.36c.24-.23.37-.55.37-.96 0-.42-.12-.74-.36-.97s-.59-.35-1.06-.35-.82.12-1.07.35-.37.55-.37.97c0 .41.13.73.38.96.26.23.61.34 1.06.34s.8-.11 1.05-.34z"
}));
/* harmony default export */ __webpack_exports__["default"] = (warning);
//# sourceMappingURL=warning.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/widget.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/widget.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const widget = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M6 3H8V5H16V3H18V5C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5V3ZM18 6.5H6C5.72386 6.5 5.5 6.72386 5.5 7V8H18.5V7C18.5 6.72386 18.2761 6.5 18 6.5ZM18.5 9.5H5.5V19C5.5 19.2761 5.72386 19.5 6 19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V9.5ZM11 11H13V13H11V11ZM7 11V13H9V11H7ZM15 13V11H17V13H15Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (widget);
//# sourceMappingURL=widget.js.map

/***/ }),

/***/ "../../node_modules/@wordpress/icons/build-module/library/wordpress.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@wordpress/icons/build-module/library/wordpress.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const wordpress = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (wordpress);
//# sourceMappingURL=wordpress.js.map

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _network_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network-list.js */ "./src/network-list.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */



/**
 * Internal Dependencies
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



const NetworkLinkURLPopover = _ref => {
  let {
    url,
    setAttributes,
    setPopover,
    popoverAnchor,
    clientId
  } = _ref;
  const {
    removeBlock
  } = useDispatch(blockEditorStore);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLPopover, {
    anchor: popoverAnchor,
    onClose: () => setPopover(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "block-editor-url-popover__link-editor",
    onSubmit: event => {
      event.preventDefault();
      setPopover(false);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-editor-url-input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
    __nextHasNoMarginBottom: true,
    value: url,
    onChange: nextURL => setAttributes({
      url: nextURL
    }),
    placeholder: __('Enter address'),
    disableSuggestions: true,
    onKeyDown: event => {
      if (!!url || event.defaultPrevented || ![BACKSPACE, DELETE].includes(event.keyCode)) {
        return;
      }

      removeBlock(clientId);
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: keyboardReturn,
    label: __('Apply'),
    type: "submit"
  })));
};
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */


function Edit(_ref2) {
  let {
    attributes,
    setAttributes,
    isSelected
  } = _ref2;
  const {
    service,
    url
  } = attributes;
  const [showURLPopover, setPopover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const IconComponent = (0,_network_list_js__WEBPACK_IMPORTED_MODULE_3__.getIconBySite)(service);
  const socialLinkName = (0,_network_list_js__WEBPACK_IMPORTED_MODULE_3__.getNameBySite)(service);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconComponent, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "cata-network-link-label screen-reader-text"
  }, socialLinkName), isSelected && showURLPopover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(NetworkLinkURLPopover, {
    url: url,
    setAttributes: setAttributes,
    setPopover: setPopover,
    popoverAnchor: popoverAnchor,
    clientId: clientId
  })));
}

/***/ }),

/***/ "./src/logos/components/collectiveworld.js":
/*!*************************************************!*\
  !*** ./src/logos/components/collectiveworld.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectiveWorldLogo": function() { return /* binding */ CollectiveWorldLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const CollectiveWorldLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 850 85"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M0 43.17c0-26.22 19.65-42 40.52-42s32.61 12.04 36.23 26.16l-12.83 4.3c-2.39-9.76-9.88-17.62-23.39-17.62s-26.6 9.63-26.6 29.16 12.96 28.86 26.71 28.86 21.24-8.66 23.95-17.75l12.53 4.12c-3.62 13.63-15.9 26.71-36.47 26.71C18.97 85.11 0 69.45 0 43.17ZM140.86 55.7c0 17.07-12.16 29.41-28.74 29.41S83.51 72.72 83.51 55.7s12.16-29.29 28.61-29.29 28.74 12.34 28.74 29.29Zm-13.26 0c0-11.48-7.25-17.38-15.47-17.38S96.66 44.21 96.66 55.7s7.37 17.62 15.47 17.62S127.6 67.3 127.6 55.7Zm23.7 27.69V1.17h13.2v82.22h-13.2Zm27.93 0V1.17h13.2v82.22h-13.2Zm76.95-15.78c-2.95 9.64-11.67 17.5-24.99 17.5-14.98 0-28.32-10.93-28.32-29.66 0-17.5 12.95-29.11 26.91-29.11 17.07 0 27.02 11.24 27.02 28.74.05 1.42-.05 2.85-.3 4.25h-40.4c.31 8.41 6.94 14.43 15.11 14.43s12.04-4.25 13.88-9.64l11.11 3.49h-.02Zm-12.65-17.93c-.24-6.45-4.54-12.28-13.63-12.28-3.39-.05-6.67 1.19-9.18 3.47a13.328 13.328 0 0 0-4.32 8.81h27.13Zm34.76 6.02c0 11.12 7.18 17.38 15.47 17.38s12.59-6.02 13.88-10.19l11.61 4.17c-2.58 8.66-10.93 18.06-25.42 18.06-16.29 0-28.61-12.59-28.61-29.41s12.39-29.29 28.32-29.29c14.87 0 23.09 9.34 25.3 18.18l-11.79 4.29c-1.23-4.91-4.96-10.32-13.39-10.32s-15.37 6.02-15.37 17.13Zm69.32-27.64h11.47v11.68h-11.47v25.67c0 4.91 2.15 6.94 7.08 6.94 1.52-.02 3.04-.16 4.54-.43v10.93c-.8.35-3.31 1.23-8.04 1.23-10.27 0-16.58-6.14-16.58-16.46V39.8h-10.27V28.06h2.83c5.89 0 8.53-3.75 8.53-8.66v-8.22h11.91v16.87ZM379.04 0c2.29 0 4.49.9 6.11 2.51a8.6 8.6 0 0 1 2.55 6.09 8.597 8.597 0 0 1-5.29 7.94 8.586 8.586 0 0 1-11.72-6.23c-.34-1.66-.18-3.39.46-4.96a8.56 8.56 0 0 1 3.14-3.87A8.523 8.523 0 0 1 379.04 0Zm-6.45 83.39V28.05h13.08v55.33h-13.08Zm58.39 0h-13.2l-22.47-55.33h14.55l14.67 39.54 14.31-39.54h13.88l-21.74 55.33Zm78.6-15.78c-2.95 9.64-11.73 17.5-24.99 17.5-14.98 0-28.31-10.93-28.31-29.66 0-17.5 12.95-29.11 26.91-29.11 17.07 0 27.02 11.24 27.02 28.74.06 1.43-.05 2.85-.35 4.25h-40.37c.35 8.41 6.94 14.43 15.1 14.43s12.04-4.25 13.88-9.64l11.11 3.49Zm-12.59-17.93c-.25-6.45-4.55-12.28-13.63-12.28-3.39-.06-6.68 1.18-9.19 3.46s-4.06 5.44-4.32 8.82h27.14ZM644.72 2.89h14.06l-22.6 80.56h-14.06l-19.53-60.92-19.53 60.85h-14L546.22 2.89h14.31l16.15 58.83 18.83-58.83h14.19l19.22 59.32 15.81-59.32Zm70.67 52.81c0 17.07-12.16 29.41-28.74 29.41s-28.62-12.39-28.62-29.41 12.16-29.29 28.62-29.29 28.74 12.34 28.74 29.29Zm-13.27 0c0-11.48-7.24-17.38-15.47-17.38s-15.47 5.89-15.47 17.38 7.37 17.62 15.47 17.62 15.41-6.08 15.47-17.62Zm56.06-14.55a24.75 24.75 0 0 0-4.3-.31c-10.27 0-14.87 5.89-14.87 16.29v26.34h-13.2V28.13h12.83v8.85c2.58-6.02 8.72-9.52 16.03-9.52 1.18 0 2.35.12 3.5.35v13.33Zm11.06 42.25V1.17h13.21v82.22h-13.21Zm79.03-10.07c0 3.38.18 6.77.55 10.13h-12.59c-.37-2.38-.55-4.78-.55-7.19-2.64 4.67-8.41 8.48-16.21 8.48-15.91 0-26.59-12.53-26.59-29.17s10.81-28.98 26.34-28.98c9.64 0 14.55 4.42 16.29 7.98V1.17h12.83l-.07 72.15Zm-27.32-.12c8.66 0 14.67-7.18 14.67-17.74s-5.89-17.13-14.55-17.13-14.98 6.69-14.98 17.26 5.83 17.62 14.87 17.62h-.01Z"
}));

/***/ }),

/***/ "./src/logos/components/creepycatalog.js":
/*!***********************************************!*\
  !*** ./src/logos/components/creepycatalog.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreepyCatalogLogo": function() { return /* binding */ CreepyCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const CreepyCatalogLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 276 48"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7,37.12a17.75,17.75,0,0,1-3.53-7.39A46.34,46.34,0,0,1,2.19,18.09q0-7.78,2.1-12.31T11,1.26a14.06,14.06,0,0,1,2.5.19c.71.12,1.63.34,2.76.65l2.24.58,1.06,11.41-.53.05c-1.42-3.05-2.55-5.32-3.38-6.83a14.51,14.51,0,0,0-2.39-3.37,3.57,3.57,0,0,0-2.52-1.1c-1.25,0-2.1.77-2.58,2.31a23.28,23.28,0,0,0-.72,6.57,73.68,73.68,0,0,0,.82,11.44,28.15,28.15,0,0,0,2.45,8.38q1.62,3.16,3.85,3.16,3.36,0,6.91-10.36l.59.16q-2.3,8.31-4.6,11.72c-1.54,2.28-3.31,3.42-5.29,3.42A6.77,6.77,0,0,1,7,37.12ZM30.15,23.24V36.7a3.36,3.36,0,0,0,.82,1,6,6,0,0,0,1.15.66v.52H22.6v-.52a10.11,10.11,0,0,0,1.14-.71,3.74,3.74,0,0,0,.83-.92V4.21a4.13,4.13,0,0,0-2-1.63V2.05h9.84a10.64,10.64,0,0,1,7.07,2.24q2.66,2.24,2.65,6.7a11.68,11.68,0,0,1-2.34,7.28,12.73,12.73,0,0,1-5.63,4.34H37.8a170.06,170.06,0,0,0,8.62,24.08L46,47a131,131,0,0,1-7.78-11.22,78.27,78.27,0,0,1-6.09-12.65,12,12,0,0,1-1.22.11Zm0-19.61v18H31a4.44,4.44,0,0,0,4-2.08q1.35-2.07,1.35-7,0-8.94-4.78-8.94Zm14.72,34.7A11.37,11.37,0,0,0,46,37.62a3.71,3.71,0,0,0,.82-.92V4.21a4.13,4.13,0,0,0-2-1.63V2.05H61.4l.8,9.78-.48.16q-2.44-5.73-5.47-8.36H52.42V19.14h6.22l-2,1.57h-4.2V37.27h4a15.5,15.5,0,0,0,2.82-3.44,51.36,51.36,0,0,0,2.87-5.49l.53.1-1,10.41H44.87Zm19.4,0a10.34,10.34,0,0,0,1.15-.71,3.71,3.71,0,0,0,.82-.92V4.21a4.08,4.08,0,0,0-2-1.63V2.05H80.81l.79,9.78-.48.16q-2.45-5.73-5.47-8.36H71.82V19.14H78l-2,1.57h-4.2V37.27h4a15.5,15.5,0,0,0,2.82-3.44,51.36,51.36,0,0,0,2.87-5.49l.53.1-1,10.41H64.27Zm19.41,0a10.11,10.11,0,0,0,1.14-.71,3.71,3.71,0,0,0,.82-.92V4.21a4.1,4.1,0,0,0-2-1.63V2.05h9.51a10.34,10.34,0,0,1,7.12,2.31c1.74,1.55,2.61,3.84,2.61,6.89a13.71,13.71,0,0,1-1.7,6.81,13,13,0,0,1-4.34,4.7,9.52,9.52,0,0,1-5.18,1.69h-.53V36.7a3.36,3.36,0,0,0,.82,1,6.36,6.36,0,0,0,1.15.66v.52H83.68Zm8.23-15.46a4.22,4.22,0,0,0,3.7-2.26c.94-1.51,1.41-4,1.41-7.52s-.4-6-1.2-7.38a3.76,3.76,0,0,0-3.43-2.08H91.17V22.87Zm16.43,15.46a10.11,10.11,0,0,0,1.14-.71,3.74,3.74,0,0,0,.83-.92V23.29L104.19,4.1a9.32,9.32,0,0,0-2.07-1.52V2.05h9.36v.53a2.68,2.68,0,0,0-.85.6,2.68,2.68,0,0,0-.54,1l4.68,16.51,5-16c-.53-1.09-1.74-1.79-3.62-2.1V2.05h6.17l-6.43,20.29V36.7a3.21,3.21,0,0,0,.82,1,5.92,5.92,0,0,0,1.14.66v.52h-9.51Zm31.17-1.21A17.87,17.87,0,0,1,136,29.73a46.34,46.34,0,0,1-1.28-11.64q0-7.78,2.1-12.31c1.4-3,3.63-4.52,6.67-4.52a14.06,14.06,0,0,1,2.5.19c.71.12,1.63.34,2.77.65l2.23.58L152,14.09l-.53.05c-1.42-3.05-2.54-5.32-3.37-6.83a14.81,14.81,0,0,0-2.4-3.37,3.57,3.57,0,0,0-2.52-1.1q-1.86,0-2.58,2.31a23.28,23.28,0,0,0-.72,6.57,73.63,73.63,0,0,0,.83,11.44,28.17,28.17,0,0,0,2.44,8.38q1.62,3.16,3.86,3.16,3.35,0,6.91-10.36l.58.16q-2.28,8.31-4.6,11.72t-5.29,3.42A6.77,6.77,0,0,1,139.51,37.12Zm32.93-.37a8.79,8.79,0,0,0,1.28,1.58v.52h-8.56v-.52a3.88,3.88,0,0,0,.91-.64,3,3,0,0,0,.58-1l-1.81-8.05H158l-2,7.47c.49.87,1.72,1.61,3.67,2.21v.52h-6.12l7.5-27.34-.85-3.73L163.51,1h.54Zm-10.68-22-3.3,12.36h6.06Zm15.15,23.61a10.11,10.11,0,0,0,1.14-.71,3.74,3.74,0,0,0,.83-.92V3.63h-2.13c-.53.87-1.2,2.08-2,3.63s-1.91,3.71-3.33,6.51l-.53,0,1.28-11.67H191.1l1.28,11.67-.48,0-1.12-2.2q-1.59-3.11-2.6-5c-.68-1.26-1.22-2.24-1.65-2.94h-2.07V36.7a3.21,3.21,0,0,0,.82,1,5.92,5.92,0,0,0,1.14.66v.52h-9.51Zm31.79-1.58A8.71,8.71,0,0,0,210,38.33v.52h-8.56v-.52a3.68,3.68,0,0,0,.91-.64,3,3,0,0,0,.58-1l-1.8-8.05h-6.81l-2,7.47c.5.87,1.72,1.61,3.67,2.21v.52h-6.11l7.49-27.34-.85-3.73L199.77,1h.53ZM198,14.72l-3.29,12.36h6.06ZM210.5,38.33a11.37,11.37,0,0,0,1.15-.71,3.71,3.71,0,0,0,.82-.92V4.21a4.13,4.13,0,0,0-2-1.63V2.05H220v.53a3.78,3.78,0,0,0-2,1.63V37.27h4.68a17.78,17.78,0,0,0,2.84-3.52Q227,31.5,229,27.81l.53.11-1.59,10.93H210.5Zm25.09-1.06a16.32,16.32,0,0,1-3.9-6.72,31.65,31.65,0,0,1-1.47-10.1,31.59,31.59,0,0,1,1.47-10.09,16.43,16.43,0,0,1,3.9-6.73A7.58,7.58,0,0,1,241,1.26a7.68,7.68,0,0,1,5.4,2.37,16.34,16.34,0,0,1,3.93,6.73,31.88,31.88,0,0,1,1.46,10.09,32,32,0,0,1-1.46,10.1,16.24,16.24,0,0,1-3.93,6.72,7.68,7.68,0,0,1-5.4,2.37A7.58,7.58,0,0,1,235.59,37.27Zm9-3.28q1.11-4.08,1.12-13.54a86.56,86.56,0,0,0-.48-10.25,14.89,14.89,0,0,0-1.55-5.6A3.15,3.15,0,0,0,241,2.84q-2.55,0-3.67,4.07t-1.11,13.54q0,9.42,1.11,13.51c.75,2.74,2,4.1,3.67,4.1S243.88,36.71,244.63,34Zm20.09-14.22h9.09V39.59h-.53L271,33.33A9.73,9.73,0,0,1,268.68,38a5.12,5.12,0,0,1-3.8,1.68,7.84,7.84,0,0,1-5.53-2.31,15.48,15.48,0,0,1-3.83-6.65,33.85,33.85,0,0,1-1.38-10.23,34.13,34.13,0,0,1,1.38-10.25,15.24,15.24,0,0,1,3.83-6.65,7.9,7.9,0,0,1,5.53-2.29,13.31,13.31,0,0,1,2.58.19c.62.12,1.35.3,2.2.55a20.66,20.66,0,0,0,2.45.68l1,11-.48,0-.74-1.57q-1.71-3.67-2.74-5.6a10.58,10.58,0,0,0-2.05-2.84,3.26,3.26,0,0,0-2.23-.92,3.12,3.12,0,0,0-2.79,1.81,15.93,15.93,0,0,0-1.52,5.66,87.74,87.74,0,0,0-.47,10.14,87.94,87.94,0,0,0,.47,10.15,15.87,15.87,0,0,0,1.52,5.65,3.16,3.16,0,0,0,2.84,1.81q1.76,0,2.55-3.81a67,67,0,0,0,.86-12.12,8.88,8.88,0,0,0-3.62-1.84Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40.54,31.46c.6,1.81,1.77,5.27,3,8.57.21.52.56,1.43,1.06,2.63.69,1.65,1.3,3,1.78,4a.85.85,0,0,1-.13.1s0,0-.25.21c-2-2.27-9-12.64-10.26-15.67a1.2,1.2,0,0,0,1.58.58l.44-.37a2.57,2.57,0,0,1,1.09-.89C39.65,30.39,40.54,31.46,40.54,31.46Z",
  fill: "#FE1600"
}));

/***/ }),

/***/ "./src/logos/components/quotecatalog.js":
/*!**********************************************!*\
  !*** ./src/logos/components/quotecatalog.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuoteCatalogLogo": function() { return /* binding */ QuoteCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const QuoteCatalogLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 67 67"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "m0 67.4822h67.3993v-67.4822h-67.3993zm2.01192-2.0144h63.37548v-63.45341h-63.37548z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m11.3206 9.33043c-.2676-.28655-.6785-.44972-1.0703-.44972-.39184 0-.80277.16317-1.06986.44972-.46827.48798-.48738 1.32997-.48738 1.95197 0 .6214.01911 1.4539.48738 1.9418.26709.2871.67802.4498 1.06986.4498.1433 0 .2962-.0192.4396-.067l-.72632-.909.74542-.5837.7454.9473c.3345-.4976.3536-1.2243.3536-1.7792 0-.622-.0191-1.46399-.4874-1.95197zm.8888 4.68797.592.7464-.7354.5741-.6307-.7846c-.3727.1621-.7741.2392-1.185.2392-.72582 0-1.43301-.2488-1.94907-.7655-.73585-.7368-.86009-1.6362-.86009-2.7456 0-1.11.12424-2.01895.86009-2.75572.51606-.51618 1.22325-.76496 1.94907-.76496.7263 0 1.4335.24878 1.9495.76496.7354.73677.8601 1.64572.8601 2.75572 0 1.1094-.1247 1.9993-.8505 2.736z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m16.7203 14.7933c-1.7488 0-2.6562-1.1099-2.6562-2.7264v-4.18091h1.2323v4.16171c0 .9664.4396 1.6261 1.4239 1.6261s1.424-.6597 1.424-1.6261v-4.16171h1.2323v4.18091c0 1.6165-.9074 2.7264-2.6563 2.7264z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m24.2601 9.33043c-.2676-.28655-.6785-.44972-1.0704-.44972-.3918 0-.8027.16317-1.0698.44972-.4683.48798-.4874 1.32997-.4874 1.95197 0 .6214.0191 1.4539.4874 1.9418.2671.2871.678.4498 1.0698.4498.3919 0 .8028-.1627 1.0704-.4498.4683-.4879.4874-1.3204.4874-1.9418 0-.622-.0191-1.46399-.4874-1.95197zm.8792 4.69757c-.5161.5167-1.2233.7655-1.9496.7655-.7258 0-1.4329-.2488-1.949-.7655-.7359-.7368-.8601-1.6362-.8601-2.7456 0-1.11.1242-2.01895.8601-2.75572.5161-.51618 1.2232-.76496 1.949-.76496.7263 0 1.4335.24878 1.9496.76496.7354.73677.8601 1.64572.8601 2.75572 0 1.1094-.1247 2.0088-.8601 2.7456z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m29.4579 9.03393v5.63477h-1.2328v-5.63477h-2.0064v-1.1477h5.2456v1.1477z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m32.3154 14.669v-6.78301h4.8256v1.1195h-3.5928v1.57881h3.1628v1.1094h-3.1628v1.8558h3.5928v1.1195z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m12.1232 23.5581c-.5065.5162-1.2137.8037-1.9395.8037-.72627 0-1.40479-.2392-1.92084-.7559-.73586-.7367-.84098-1.6457-.84098-2.7552 0-1.1099.10512-2.0189.84098-2.7557.51605-.5161 1.19457-.7649 1.92084-.7649.7258 0 1.433.2679 1.9395.7841.3918.4019.5925.9377.6499 1.4735h-1.2615c-.0287-.2966-.1338-.5071-.3058-.7176-.2198-.277-.6021-.421-1.0221-.421-.39178 0-.77405.1631-1.04163.4497-.46828.488-.46828 1.33-.46828 1.9519 0 .6215 0 1.4635.46828 1.9515.26758.287.64985.4497 1.04163.4497.42 0 .8023-.1531 1.0221-.4306.172-.2105.2771-.4492.3058-.7458h1.2615c-.0574.5353-.2581 1.0807-.6499 1.4826z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m15.9256 18.9656-.9648 2.861h1.93zm1.787 5.2717-.4396-1.3013h-2.6949l-.4391 1.3013h-1.2424l2.3791-6.783h1.3475l2.3791 6.783z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m21.6303 18.6023v5.6348h-1.2328v-5.6348h-2.0064v-1.1477h5.2455v1.1477z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m26.0542 18.9656-.9648 2.861h1.93zm1.7871 5.2717-.4397-1.3013h-2.6944l-.4396 1.3013h-1.2424l2.3791-6.783h1.3475l2.3791 6.783z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m29.925 24.2373v-6.783h1.2328v5.6162h3.1436v1.1668z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m38.4283 18.8988c-.2676-.2866-.6785-.4497-1.0699-.4497-.3923 0-.8032.1631-1.0703.4497-.4683.488-.4874 1.33-.4874 1.9519 0 .6215.0191 1.4539.4874 1.9419.2671.2871.678.4497 1.0703.4497.3914 0 .8023-.1626 1.0699-.4497.4682-.488.4874-1.3204.4874-1.9419 0-.6219-.0192-1.4639-.4874-1.9519zm.8792 4.6976c-.5161.5166-1.2233.7654-1.9491.7654-.7263 0-1.4335-.2488-1.9495-.7654-.7359-.7368-.8601-1.6362-.8601-2.7457 0-1.1099.1242-2.0189.8601-2.7557.516-.5161 1.2232-.7649 1.9495-.7649.7258 0 1.433.2488 1.9491.7649.7353.7368.8601 1.6458.8601 2.7557 0 1.1095-.1248 2.0089-.8601 2.7457z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m45.7104 24.2372-.1433-.7458c-.2007.3918-.8506.8606-1.7011.8702-.7836.0095-1.4808-.1914-2.016-.7559-.7071-.7368-.8792-1.6453-.8792-2.7552s.1434-1.9902.8792-2.727c.5161-.5162 1.2902-.7937 2.016-.7937.8314 0 1.5482.3062 2.0069.7751.3345.3444.5824.7745.6212 1.3677h-1.2615c-.0191-.2674-.1529-.4497-.2963-.6214-.2389-.2775-.6116-.4119-1.0799-.4119-.3913 0-.8404.1727-1.108.4592-.4683.488-.5256 1.33-.5256 1.952 0 .6219.0669 1.4922.5351 1.9801.2676.2871.7072.4311 1.0985.4311.4396 0 .7837-.1531 1.013-.3928.3632-.3827.4396-.8032.4396-1.3199h-1.615v-1.0238h2.8096v3.712z"
}));

/***/ }),

/***/ "./src/logos/components/shopcatalog.js":
/*!*********************************************!*\
  !*** ./src/logos/components/shopcatalog.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopCatalogLogo": function() { return /* binding */ ShopCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const ShopCatalogLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 175 23"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M 0 10.9414L 0 12.1342L 26.4605 12.1342L 26.4605 10.9414L 0 10.9414ZM 42.1742 7.18334C 41.1544 6.43138 40.0301 6.06836 38.6182 6.06836C 36.3696 6.06836 34.8008 7.39078 34.8008 9.28366C 34.8008 10.0356 35.0884 10.7617 35.559 11.2802C 36.1866 11.9285 36.9187 12.3693 38.9058 13.2509C 40.6315 14.0288 41.2067 14.5733 41.2067 15.5068C 41.2067 16.5699 40.2132 17.3478 38.8535 17.3478C 37.2847 17.3478 36.2911 16.2328 36.0558 14.2103L 35.193 14.2103L 35.193 17.4775C 36.1866 17.9701 37.7031 18.3072 39.0104 18.3072C 41.4943 18.3072 43.0109 17.0107 43.0109 14.8845C 43.0109 14.3918 42.9063 13.8992 42.6971 13.4584C 42.331 12.5767 41.782 12.1619 39.9778 11.358C 37.2063 10.1393 36.6833 9.72446 36.6833 8.73913C 36.6833 7.67601 37.4416 7.02776 38.6705 7.02776C 40.1086 7.02776 40.9714 7.96124 41.3636 9.98376L 42.1742 9.98376L 42.1742 7.18334ZM 48.3722 0L 47.7969 0L 44.2148 1.27056L 44.2148 1.76323L 46.1758 2.87821L 46.1758 14.5985C 46.1758 16.3617 45.6791 17.0877 44.424 17.0877L 44.2148 17.0877L 44.2148 18.0212L 50.4639 18.0212L 50.4639 17.0877L 50.1502 17.0877C 48.8951 17.0877 48.3722 16.3617 48.3722 14.5985L 48.3722 8.99764C 49.3396 8.24568 50.4901 7.80487 51.5621 7.80487C 53.2616 7.80487 54.1245 8.7902 54.1245 10.8387L 54.1245 14.5985C 54.1245 16.3617 53.6015 17.0877 52.3465 17.0877L 52.1373 17.0877L 52.1373 18.0212L 58.2034 18.0212L 58.2034 17.0877L 58.0726 17.0877C 56.8176 17.0877 56.2946 16.3617 56.2946 14.5985L 56.2946 10.6571C 56.2946 8.97171 56.1901 8.32347 55.7456 7.54557C 55.1965 6.63803 54.046 6.06757 52.7125 6.06757C 51.7451 6.06757 50.8038 6.32687 49.941 6.81954C 49.418 7.1307 49.1827 7.3122 48.3722 8.01231L 48.3722 0ZM 59.7188 12.0841C 59.7188 8.7132 62.3073 6.06836 65.5756 6.06836C 69.1316 6.06836 71.6678 8.55762 71.6678 12.0841C 71.6678 15.6105 69.1054 18.3072 65.7586 18.3072C 62.4642 18.3072 59.7188 15.4549 59.7188 12.0841ZM 65.4192 7.02734L 65.2884 7.02734C 63.3013 7.02734 62.2031 8.45348 62.2031 11.0724C 62.2031 11.7466 62.2816 12.4207 62.4123 13.0949C 62.9875 15.8175 64.321 17.3474 66.0728 17.3474C 68.0339 17.3474 69.315 15.8953 69.315 13.6394C 69.315 11.9799 68.8967 10.2426 68.1907 8.86836C 67.5632 7.67559 66.6742 7.0792 65.4192 7.02734ZM 77.1832 17.5553L 77.1832 19.5778C 77.1832 21.3151 77.7061 22.0411 78.9611 22.0411L 79.4318 22.0411L 79.4318 22.9746L 73.0781 22.9746L 73.0781 22.0411L 73.235 22.0411C 74.4901 22.0411 75.013 21.3151 75.013 19.5778L 75.013 8.89471L 73.1566 7.83159L 73.1566 7.39078L 76.5295 6.06836L 77.1832 6.06836L 77.1832 8.01309C 78.5428 6.66474 79.824 6.06836 81.4451 6.06836C 84.2951 6.06836 86.2822 8.35018 86.2822 11.5914C 86.2822 15.2994 83.5891 18.3072 80.2423 18.3072C 79.2226 18.3072 78.1767 18.0479 77.1832 17.5553ZM 77.1836 9.07558L 77.1836 12.9391C 77.1836 14.6505 77.262 15.0654 77.785 15.8433C 78.3079 16.6989 79.3276 17.2175 80.4519 17.2175C 82.7006 17.2175 84.0602 15.584 84.0602 12.8354C 84.0602 9.90534 82.5175 7.88281 80.2689 7.88281C 79.2753 7.88281 78.1772 8.29769 77.1836 9.07558ZM 105.605 14.5993C 104.9 15.7142 103.801 16.2588 102.311 16.2588C 99.8532 16.2588 97.9706 14.1325 97.9706 11.384C 97.9706 8.81692 99.4087 7.13148 101.605 7.13148C 102.834 7.13148 103.435 7.4945 103.932 8.53169C 104.324 9.38737 104.638 9.64667 105.161 9.64667C 105.789 9.64667 106.155 9.17994 106.155 8.40204C 106.155 6.92404 104.612 6.06836 102.023 6.06836C 98.389 6.06836 95.8789 8.60948 95.8789 12.2915C 95.8789 15.818 98.1537 18.3072 101.422 18.3072C 103.828 18.3072 105.658 17.0367 106.233 14.9882L 105.605 14.5993ZM 114.943 10.995L 114.943 9.80225C 114.943 7.93531 114.237 7.15741 112.537 7.15741C 111.831 7.15741 111.151 7.41671 110.733 7.88345C 110.602 8.03902 110.524 8.1946 110.524 8.37611C 110.524 8.55762 110.576 8.68727 110.759 9.02436C 111.047 9.49109 111.125 9.69853 111.125 9.85411C 111.125 9.98376 111.047 10.1134 110.916 10.1653L 109.583 10.7876C 109.478 10.8135 109.4 10.8394 109.373 10.8394C 109.19 10.8394 109.034 10.632 108.667 9.77632C 108.563 9.54295 108.511 9.33551 108.511 9.10215C 108.511 7.41671 110.655 6.06836 113.322 6.06836C 115.23 6.06836 116.538 6.63881 116.93 7.62415C 117.087 8.11681 117.139 8.42797 117.139 9.77632L 117.139 14.5733C 117.139 16.2069 117.217 16.4403 117.793 16.4403C 118.028 16.4403 118.289 16.3366 118.603 16.1551L 118.839 17.0626C 118.054 17.9183 117.4 18.3072 116.695 18.3072C 115.727 18.3072 115.073 17.6331 114.943 16.4403C 113.426 17.7886 112.354 18.3072 111.099 18.3072C 109.373 18.3072 108.145 17.1145 108.145 15.5068C 108.145 14.6511 108.537 13.8992 109.269 13.3287C 109.975 12.7842 110.655 12.4471 112.145 11.9544L 114.943 10.995ZM 114.939 11.9805L 113.553 12.4991C 111.095 13.4325 110.441 13.9252 110.441 14.9105C 110.441 15.8959 111.226 16.57 112.298 16.57C 113.239 16.57 114.076 16.1552 114.939 15.2217L 114.939 11.9805ZM 124.146 7.64822L 127.702 7.64822L 127.702 6.35173L 124.146 6.35173L 124.146 4.27734L 123.257 4.27734C 122.42 5.49604 121.086 6.55917 119.988 6.94811L 119.988 7.64822L 121.975 7.64822L 121.975 15.2716L 121.949 16.0235C 121.949 17.6312 122.708 18.3054 124.486 18.3054C 125.008 18.3054 125.505 18.2535 125.976 18.1757L 127.858 17.8646L 127.858 16.594C 127.048 16.6977 126.76 16.7236 125.95 16.7236C 124.407 16.7236 124.146 16.4644 124.146 14.8826L 124.146 7.64822ZM 136.173 10.995L 136.173 9.80225C 136.173 7.93531 135.467 7.15741 133.768 7.15741C 133.062 7.15741 132.382 7.41671 131.964 7.88345C 131.833 8.03902 131.754 8.1946 131.754 8.37611C 131.754 8.55762 131.807 8.68727 131.99 9.02436C 132.277 9.49109 132.356 9.69853 132.356 9.85411C 132.356 9.98376 132.277 10.1134 132.147 10.1653L 130.813 10.7876C 130.708 10.8135 130.63 10.8394 130.604 10.8394C 130.421 10.8394 130.264 10.632 129.898 9.77632C 129.793 9.54295 129.741 9.33551 129.741 9.10215C 129.741 7.41671 131.885 6.06836 134.552 6.06836C 136.461 6.06836 137.768 6.63881 138.16 7.62415C 138.317 8.11681 138.369 8.42797 138.369 9.77632L 138.369 14.5733C 138.369 16.2069 138.448 16.4403 139.023 16.4403C 139.258 16.4403 139.52 16.3366 139.834 16.1551L 140.069 17.0626C 139.285 17.9183 138.631 18.3072 137.925 18.3072C 136.958 18.3072 136.304 17.6331 136.173 16.4403C 134.657 17.7886 133.585 18.3072 132.33 18.3072C 130.604 18.3072 129.375 17.1145 129.375 15.5068C 129.375 14.6511 129.767 13.8992 130.499 13.3287C 131.205 12.7842 131.885 12.4471 133.375 11.9544L 136.173 10.995ZM 136.173 11.9805L 134.787 12.4991C 132.329 13.4325 131.676 13.9252 131.676 14.9105C 131.676 15.8959 132.46 16.57 133.532 16.57C 134.473 16.57 135.31 16.1552 136.173 15.2217L 136.173 11.9805ZM 145.404 0L 144.881 0L 141.43 1.2187L 141.43 1.78916L 143.234 2.77449L 143.234 14.5985C 143.234 16.3358 142.711 17.0877 141.508 17.0877L 141.43 17.0877L 141.43 18.0212L 147.051 18.0212L 147.051 17.0877L 146.973 17.0877C 145.901 17.0877 145.404 16.3098 145.404 14.5985L 145.404 0ZM 148.934 12.0841C 148.934 8.7132 151.522 6.06836 154.79 6.06836C 158.346 6.06836 160.883 8.55762 160.883 12.0841C 160.883 15.6105 158.32 18.3072 154.973 18.3072C 151.679 18.3072 148.934 15.4549 148.934 12.0841ZM 154.634 7.02734L 154.503 7.02734C 152.516 7.02734 151.418 8.45348 151.418 11.0724C 151.418 11.7466 151.496 12.4207 151.627 13.0949C 152.202 15.8175 153.536 17.3474 155.288 17.3474C 157.249 17.3474 158.53 15.8953 158.53 13.6394C 158.53 11.9799 158.112 10.2426 157.406 8.86836C 156.778 7.67559 155.889 7.0792 154.634 7.02734ZM 175 6.76846L 174.896 8.53169C 174.425 8.58355 174.268 8.58355 174.007 8.58355C 173.484 8.58355 173.118 8.55762 172.438 8.37611C 172.725 9.05029 172.83 9.56888 172.83 10.1912C 172.83 12.5508 170.738 14.3918 167.993 14.3918C 167.548 14.3918 167.208 14.34 166.372 14.1585C 166.293 14.2103 166.215 14.2622 166.189 14.2881C 165.718 14.6771 165.535 14.8845 165.535 15.1438C 165.535 15.792 166.163 15.9735 168.542 15.9735L 169.222 15.9735C 171.104 15.9735 171.47 15.9995 172.386 16.2588C 173.771 16.6477 174.582 17.5293 174.582 18.6962C 174.582 21.1854 171.68 23.0005 167.705 23.0005C 164.829 23.0005 162.633 21.9633 162.633 20.615C 162.633 19.863 163.234 19.111 164.855 17.8923C 163.836 17.4515 163.365 16.9848 163.365 16.4144C 163.365 15.818 164.071 14.9623 165.535 13.7695C 164.097 12.9398 163.391 11.7988 163.391 10.2949C 163.391 7.90938 165.378 6.06836 167.993 6.06836C 168.464 6.06836 169.117 6.14615 169.875 6.30173C 172.124 6.79439 172.516 6.84625 173.85 6.84625C 174.32 6.84625 174.503 6.82032 175 6.76846ZM 165.691 9.85349L 165.691 10.1128C 165.691 11.9797 166.79 13.3799 168.254 13.3799C 169.718 13.3799 170.555 12.3168 170.555 10.5277C 170.555 8.60886 169.43 7.13086 167.966 7.13086C 166.711 7.13086 165.796 8.21991 165.691 9.85349ZM 165.743 18.0996L 165.508 18.3589C 164.776 19.1109 164.566 19.448 164.566 19.9147C 164.566 20.926 166.083 21.6779 168.201 21.6779C 169.43 21.6779 170.894 21.3927 171.809 21.0037C 172.437 20.7185 172.855 20.1999 172.855 19.6554C 172.855 18.6701 171.94 18.2811 169.639 18.2811L 168.332 18.307C 167.521 18.307 166.658 18.2293 165.743 18.0996Z"
}));

/***/ }),

/***/ "./src/logos/components/thoughtcatalog.js":
/*!************************************************!*\
  !*** ./src/logos/components/thoughtcatalog.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThoughtCatalogLogo": function() { return /* binding */ ThoughtCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const ThoughtCatalogLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 284 32"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10.81,31.53H6V4.89H0V.47H16.86V4.89h-6ZM25,17.84V31.53h-4.8V.47H25V13.41h6.85V.47h4.8V31.53h-4.8V17.84Zm33,3.82c0,3.49-.52,5.59-1.77,7.36-1.4,1.95-3.73,3-6.71,3s-5.31-1-6.71-3C41.54,27.25,41,25.15,41,21.66V10.34c0-3.49.51-5.59,1.77-7.36,1.4-2,3.73-3,6.71-3s5.31,1,6.71,3C57.47,4.75,58,6.85,58,10.34Zm-12.16-.09c0,2.46.14,3.3.6,4.23a3.65,3.65,0,0,0,6.15,0c.51-1,.61-1.72.61-4.23V10.43c0-2.51-.1-3.26-.61-4.24a3.67,3.67,0,0,0-6.15,0c-.46.94-.6,1.77-.6,4.24Zm33-21.1V21.52c0,3.91-.47,5.92-1.77,7.68A7.69,7.69,0,0,1,70.65,32c-2.84,0-5.12-1-6.47-2.8s-1.77-3.77-1.77-7.68V.47h4.8V22.31c0,3.68,1,5.17,3.44,5.17s3.4-1.49,3.4-5.17V.47Zm21.33,15.65V31.53H97.71l-.88-2.65A6.51,6.51,0,0,1,91,32a7,7,0,0,1-6.42-3.63c-1-2-1.35-4-1.35-8.29V11.5c0-4.93.37-6.7,1.81-8.61A7.84,7.84,0,0,1,91.61,0a7.67,7.67,0,0,1,7.31,4.14c.79,1.54,1.12,3.45,1.12,6.43h-4.8c0-4.28-1.07-6.05-3.68-6.05A3,3,0,0,0,88.72,6.1c-.56,1-.7,2-.7,4.47v9.51a16.45,16.45,0,0,0,.51,5.07,3.36,3.36,0,0,0,3.27,2.33c2.51,0,3.58-1.82,3.58-6.15V20.08h-4v-4Zm9.08,1.72V31.53h-4.8V.47h4.8V13.41h6.85V.47h4.79V31.53h-4.79V17.84Zm25.8,13.69h-4.8V4.89h-6V.47h16.87V4.89h-6.06Zm27.53-21V9.92c0-3.59-1.26-5.4-3.64-5.4a3,3,0,0,0-2.84,1.54c-.6,1-.74,2-.74,4.47V20.87a13.42,13.42,0,0,0,.51,4.61,3.23,3.23,0,0,0,3.07,2c1.77,0,2.94-1,3.45-3.07a17.6,17.6,0,0,0,.28-3.78h4.84v1.08c0,6.75-2.93,10.29-8.52,10.29-3.12,0-5.59-1.21-6.94-3.45-1.17-1.91-1.49-3.72-1.49-8.33V11.5c0-4.93.37-6.66,1.82-8.61S156.06,0,159,0c5.31,0,8.43,3.54,8.43,9.64v.93Zm13.69,14.21L175,31.53h-4.71l6-31.06h6.56l6.29,31.06h-4.94l-1.3-6.75Zm3.26-18.35L177,20.35h5.08Zm20.4,25.1h-4.8V4.89h-6V.47H206V4.89h-6.05Zm12.29-6.75L211,31.53h-4.7l6-31.06h6.57l6.29,31.06h-4.94l-1.3-6.75Zm3.26-18.35L213,20.35h5.07Zm17.7,20.68h9.55v4.42H228.39V.47h4.8Zm29.53-5.45c0,3.49-.52,5.59-1.77,7.36-1.4,1.95-3.73,3-6.71,3s-5.31-1-6.71-3c-1.26-1.77-1.77-3.87-1.77-7.36V10.34c0-3.49.51-5.59,1.77-7.36,1.4-2,3.73-3,6.71-3s5.31,1,6.71,3c1.25,1.77,1.77,3.87,1.77,7.36Zm-12.16-.09c0,2.46.14,3.3.6,4.23a3.65,3.65,0,0,0,6.15,0c.51-1,.61-1.72.61-4.23V10.43c0-2.51-.1-3.26-.61-4.24a3.67,3.67,0,0,0-6.15,0c-.46.94-.6,1.77-.6,4.24Zm33.21-5.45V31.53H281.3l-.89-2.65A6.48,6.48,0,0,1,274.59,32a7,7,0,0,1-6.43-3.63c-1-2-1.35-4-1.35-8.29V11.5c0-4.93.38-6.7,1.82-8.61A7.84,7.84,0,0,1,275.2,0a7.67,7.67,0,0,1,7.31,4.14c.79,1.54,1.12,3.45,1.12,6.43h-4.8c0-4.28-1.07-6.05-3.68-6.05a3,3,0,0,0-2.84,1.58c-.56,1-.7,2-.7,4.47v9.51a16.45,16.45,0,0,0,.51,5.07,3.35,3.35,0,0,0,3.26,2.33c2.52,0,3.59-1.82,3.59-6.15V20.08h-4v-4Z"
}));

/***/ }),

/***/ "./src/logos/components/thoughtcatalogbooks.js":
/*!*****************************************************!*\
  !*** ./src/logos/components/thoughtcatalogbooks.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThoughtCatalogBooksLogo": function() { return /* binding */ ThoughtCatalogBooksLogo; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const ThoughtCatalogBooksLogo = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 66 66"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M7.20562462,2.60281231 L9.93478704,2.60281231 L9.93478704,0.252700224 L2,0.252700224 L2,2.60281231 L4.67862238,2.60281231 L4.67862238,17.1078052 L7.20562462,17.1078052 L7.20562462,2.60281231 Z M15.7911147,9.50152843 L15.7911147,17.1078052 L18.318117,17.1078052 L18.318117,0.252700224 L15.7911147,0.252700224 L15.7911147,7.15141634 L12.9861422,7.15141634 L12.9861422,0.252700224 L10.45914,0.252700224 L10.45914,17.1078052 L12.9861422,17.1078052 L12.9861422,9.50152843 L15.7911147,9.50152843 Z M27.6111677,5.73629509 C27.6111677,3.23456287 27.4090075,2.32484206 26.6003668,1.33931119 C25.9433462,0.505400448 24.8314653,0 23.6690442,0 C22.4813532,0 21.3947422,0.505400448 20.7124516,1.33931119 C19.9038109,2.32484206 19.7016507,3.25983289 19.7016507,5.73629509 L19.7016507,11.6242103 C19.7016507,14.1006725 19.9038109,15.0356633 20.7124516,16.0211942 C21.3947422,16.855105 22.4813532,17.3605054 23.6690442,17.3605054 C24.8314653,17.3605054 25.9180762,16.855105 26.6003668,16.0211942 C27.4090075,15.0356633 27.6111677,14.1259425 27.6111677,11.6242103 L27.6111677,5.73629509 Z M22.2286529,6.01426534 C22.2286529,4.72549419 22.279193,3.81577338 22.329733,3.51253312 C22.5066232,2.77970247 22.9867536,2.35011208 23.6690442,2.35011208 C24.2502547,2.35011208 24.6798451,2.67862238 24.9072753,3.25983289 C25.0336254,3.63888323 25.0841655,4.29590381 25.0841655,6.01426534 L25.0841655,11.3462401 C25.0841655,12.6855513 25.0588955,13.519462 24.9830854,13.8479723 C24.8061952,14.5808029 24.3260648,15.0103933 23.6690442,15.0103933 C23.0878337,15.0103933 22.6329733,14.681883 22.4055431,14.1006725 C22.279193,13.7216222 22.2286529,13.0140615 22.2286529,11.3462401 L22.2286529,6.01426534 Z M34.4024862,0.252700224 L34.4024862,11.3462401 C34.4024862,12.6855513 34.3772162,13.519462 34.3014062,13.8479723 C34.124516,14.5808029 33.6443856,15.0103933 32.987365,15.0103933 C32.4061545,15.0103933 31.9512941,14.681883 31.7238639,14.1006725 C31.5975138,13.7216222 31.5469737,13.0140615 31.5469737,11.3462401 L31.5469737,0.252700224 L29.0199715,0.252700224 L29.0199715,11.6242103 C29.0199715,14.1006725 29.2221316,15.0356633 30.0307724,16.0211942 C30.713063,16.855105 31.7996739,17.3605054 32.987365,17.3605054 C34.149786,17.3605054 35.236397,16.855105 35.9186876,16.0211942 C36.7273283,15.0356633 36.9294885,14.1259425 36.9294885,11.6242103 L36.9294885,0.252700224 L34.4024862,0.252700224 Z M46.2478093,8.5665376 L42.1793356,8.5665376 L42.1793356,10.6639495 L43.720807,10.6639495 L43.720807,11.3462401 C43.720807,12.6602812 43.695537,13.494192 43.5944569,13.8479723 C43.4428368,14.5555329 42.9627063,14.9851233 42.3056858,14.9851233 C41.7244752,14.9851233 41.2443448,14.631343 41.0674547,14.0754025 C40.9411045,13.7468922 40.8652945,12.6855513 40.8652945,11.3462401 L40.8652945,6.01426534 C40.8652945,4.75076421 40.9158345,3.84104341 40.9663746,3.53780314 C41.1432647,2.80497249 41.6233951,2.37538211 42.2804157,2.37538211 C42.8616262,2.37538211 43.3164867,2.7038924 43.5186468,3.23456287 C43.6449969,3.56307316 43.695537,4.19482372 43.695537,5.38251477 L43.695537,5.76156511 L46.2478093,5.76156511 L46.2478093,4.90238435 C46.2478093,3.33564296 46.1214591,2.65335235 45.6665987,1.86998166 C45.0348482,0.682290605 43.7713471,0 42.3056858,0 C41.1179947,0 40.0313837,0.480130426 39.3490931,1.33931119 C38.5151824,2.35011208 38.3382922,3.20929285 38.3382922,5.83737518 L38.3382922,11.7252904 C38.3382922,13.8227023 38.5404524,14.9598533 39.0963929,15.9201141 C39.6523334,16.8298349 40.6631343,17.3605054 41.8760954,17.3605054 C43.1143265,17.3605054 43.8218871,16.930915 44.5294477,15.768494 L45.0095782,17.1078052 L46.2478093,17.1078052 L46.2478093,8.5665376 Z M53.0391278,9.50152843 L53.0391278,17.1078052 L55.56613,17.1078052 L55.56613,0.252700224 L53.0391278,0.252700224 L53.0391278,7.15141634 L50.2341553,7.15141634 L50.2341553,0.252700224 L47.707153,0.252700224 L47.707153,17.1078052 L50.2341553,17.1078052 L50.2341553,9.50152843 L53.0391278,9.50152843 Z M61.2708376,2.60281231 L64,2.60281231 L64,0.252700224 L56.065213,0.252700224 L56.065213,2.60281231 L58.7438353,2.60281231 L58.7438353,17.1078052 L61.2708376,17.1078052 L61.2708376,2.60281231 Z M10.7939678,28.2996173 L10.7939678,27.3898965 C10.7939678,25.7473451 10.6676177,25.1408645 10.2127573,24.3069538 C9.58100673,23.1445328 8.3175056,22.4622421 6.8518443,22.4622421 C5.63888323,22.4622421 4.57754229,22.9423726 3.89525168,23.8015533 C3.06134094,24.8123542 2.88445078,25.646265 2.88445078,28.2996173 L2.88445078,34.0106424 C2.88445078,36.6387247 3.06134094,37.4726355 3.89525168,38.4834364 C4.57754229,39.3426171 5.66415325,39.8227475 6.8518443,39.8227475 C8.34277563,39.8227475 9.58100673,39.0899169 10.2127573,37.8516858 C10.6676177,36.967235 10.7939678,36.3102144 10.7939678,34.5665829 L10.7939678,33.606322 L8.24169554,33.606322 L8.24169554,34.0359124 C8.24169554,34.8192831 8.16588547,36.0827842 8.11534542,36.3102144 C7.96372529,37.0430451 7.48359486,37.4726355 6.82657428,37.4726355 C6.24536377,37.4726355 5.81577338,37.1441252 5.58834318,36.5629147 C5.46199307,36.1838643 5.41145303,35.5268437 5.41145303,33.8337522 L5.41145303,28.4765075 C5.41145303,27.1371963 5.43672305,26.3032856 5.51253312,25.9747753 C5.68942327,25.2419446 6.1695537,24.8123542 6.82657428,24.8123542 C7.4077848,24.8123542 7.8626452,25.1408645 8.06480538,25.671535 C8.19115549,26.0000453 8.24169554,26.6317958 8.24169554,27.895297 L8.24169554,28.2996173 L10.7939678,28.2996173 Z M17.3073161,35.855354 L17.8885266,39.5700473 L20.4913389,39.5700473 L17.5600163,22.7149424 L14.2749134,22.7149424 L11.5204809,39.5700473 L14.0222132,39.5700473 L14.6034237,35.855354 L17.3073161,35.855354 Z M16.9282657,33.5052419 L14.957204,33.5052419 L15.9174648,26.783416 L16.9282657,33.5052419 Z M25.665376,25.0650545 L28.3945384,25.0650545 L28.3945384,22.7149424 L20.4597514,22.7149424 L20.4597514,25.0650545 L23.1383738,25.0650545 L23.1383738,39.5700473 L25.665376,39.5700473 L25.665376,25.0650545 Z M34.2508661,35.855354 L34.8320766,39.5700473 L37.4348889,39.5700473 L34.5035663,22.7149424 L31.2184634,22.7149424 L28.464031,39.5700473 L30.9657632,39.5700473 L31.5469737,35.855354 L34.2508661,35.855354 Z M33.8718158,33.5052419 L31.900754,33.5052419 L32.8610149,26.783416 L33.8718158,33.5052419 Z M45.0853882,37.2199352 L40.8905645,37.2199352 L40.8905645,22.7149424 L38.3635623,22.7149424 L38.3635623,39.5700473 L45.0853882,39.5700473 L45.0853882,37.2199352 Z M53.5950683,28.1985372 C53.5950683,25.696805 53.3929081,24.7870842 52.5842674,23.8015533 C51.9272468,22.9676426 50.8153658,22.4622421 49.6529448,22.4622421 C48.4652537,22.4622421 47.3786428,22.9676426 46.6963521,23.8015533 C45.8877114,24.7870842 45.6855513,25.722075 45.6855513,28.1985372 L45.6855513,34.0864525 C45.6855513,36.5629147 45.8877114,37.4979055 46.6963521,38.4834364 C47.3786428,39.3173471 48.4652537,39.8227475 49.6529448,39.8227475 C50.8153658,39.8227475 51.9019768,39.3173471 52.5842674,38.4834364 C53.3929081,37.4979055 53.5950683,36.5881847 53.5950683,34.0864525 L53.5950683,28.1985372 Z M48.2125535,28.4765075 C48.2125535,27.1877363 48.2630935,26.2780155 48.3136336,25.9747753 C48.4905237,25.2419446 48.9706542,24.8123542 49.6529448,24.8123542 C50.2341553,24.8123542 50.6637457,25.1408645 50.8911759,25.722075 C51.017526,26.1011254 51.068066,26.758146 51.068066,28.4765075 L51.068066,33.8084822 C51.068066,35.1477934 51.042796,35.9817041 50.9669859,36.3102144 C50.7900958,37.0430451 50.3099654,37.4726355 49.6529448,37.4726355 C49.0717343,37.4726355 48.6168739,37.1441252 48.3894437,36.5629147 C48.2630935,36.1838643 48.2125535,35.4763037 48.2125535,33.8084822 L48.2125535,28.4765075 Z M62.837579,31.0287797 L58.7691054,31.0287797 L58.7691054,33.1261916 L60.3105767,33.1261916 L60.3105767,33.8084822 C60.3105767,35.1225234 60.2853067,35.9564341 60.1842266,36.3102144 C60.0326065,37.0177751 59.5524761,37.4473654 58.8954555,37.4473654 C58.314245,37.4473654 57.8341145,37.0935851 57.6572244,36.5376446 C57.5308743,36.2091343 57.4550642,35.1477934 57.4550642,33.8084822 L57.4550642,28.4765075 C57.4550642,27.2130064 57.5056042,26.3032856 57.5561443,26.0000453 C57.7330344,25.2672146 58.2131649,24.8376243 58.8701854,24.8376243 C59.451396,24.8376243 59.9062564,25.1661345 60.1084165,25.696805 C60.2347667,26.0253153 60.2853067,26.6570659 60.2853067,27.8447569 L60.2853067,28.2238073 L62.837579,28.2238073 L62.837579,27.3646265 C62.837579,25.7978851 62.7112289,25.1155945 62.2563685,24.3322238 C61.6246179,23.1445328 60.3611168,22.4622421 58.8954555,22.4622421 C57.7077644,22.4622421 56.6211535,22.9423726 55.9388628,23.8015533 C55.1049521,24.8123542 54.928062,25.671535 54.928062,28.2996173 L54.928062,34.1875325 C54.928062,36.2849444 55.1302221,37.4220954 55.6861626,38.3823563 C56.2421031,39.2920771 57.252904,39.8227475 58.4658651,39.8227475 C59.7040962,39.8227475 60.4116568,39.3931572 61.1192174,38.2307361 L61.5993479,39.5700473 L62.837579,39.5700473 L62.837579,31.0287797 Z M5.46199307,53.6454498 L5.46199307,46.9488939 L7.45832484,46.9488939 C10.0105971,46.9488939 13.0682698,46.7972737 13.0682698,50.2592668 C13.0682698,53.6959899 9.83370695,53.6454498 7.30670471,53.6454498 L5.46199307,53.6454498 Z M5.46199307,55.4143514 L8.11534542,55.4143514 C12.4365193,55.4143514 13.5231302,57.1327129 13.5231302,59.482825 C13.5231302,61.6307769 12.6892195,63.0711682 7.91318525,63.0711682 L5.46199307,63.0711682 L5.46199307,55.4143514 Z M9.1008763,64.8400697 C14.5844712,64.8400697 15.5952721,61.6813169 15.5952721,59.3564749 C15.5952721,56.8547427 14.2306908,55.1869212 11.8805788,54.4793606 C13.9274506,53.9739601 15.1404117,52.3314086 15.1404117,50.2339968 C15.1404117,48.0355048 13.8263705,45.1799923 8.79763603,45.1799923 L3.38985123,45.1799923 L3.38985123,64.8400697 L9.1008763,64.8400697 Z M22.7403709,65.2443901 C25.8485837,65.2443901 28.3250459,63.0964382 28.3250459,57.8655436 C28.3250459,52.6346489 25.8485837,50.486697 22.7403709,50.486697 C19.6321581,50.486697 17.1556959,52.6346489 17.1556959,57.8655436 C17.1556959,63.0964382 19.6321581,65.2443901 22.7403709,65.2443901 L22.7403709,65.2443901 Z M22.7403709,63.5765686 C19.7079682,63.5765686 19.1267577,60.2409257 19.1267577,57.8655436 C19.1267577,55.4901614 19.7079682,52.1545185 22.7403709,52.1545185 C25.7727736,52.1545185 26.3539841,55.4901614 26.3539841,57.8655436 C26.3539841,60.2409257 25.7727736,63.5765686 22.7403709,63.5765686 L22.7403709,63.5765686 Z M35.4448747,65.2443901 C38.5530874,65.2443901 41.0295496,63.0964382 41.0295496,57.8655436 C41.0295496,52.6346489 38.5530874,50.486697 35.4448747,50.486697 C32.3366619,50.486697 29.8601997,52.6346489 29.8601997,57.8655436 C29.8601997,63.0964382 32.3366619,65.2443901 35.4448747,65.2443901 L35.4448747,65.2443901 Z M35.4448747,63.5765686 C32.412472,63.5765686 31.8312615,60.2409257 31.8312615,57.8655436 C31.8312615,55.4901614 32.412472,52.1545185 35.4448747,52.1545185 C38.4772774,52.1545185 39.0584879,55.4901614 39.0584879,57.8655436 C39.0584879,60.2409257 38.4772774,63.5765686 35.4448747,63.5765686 L35.4448747,63.5765686 Z M44.9400856,45.1799923 L42.9690238,45.1799923 L42.9690238,64.8400697 L44.9400856,64.8400697 L44.9400856,60.0640355 L47.2143876,57.259063 L50.7774608,64.8400697 L52.9001427,64.8400697 L48.4778887,55.6670516 L52.3189321,50.8910174 L50.1204402,50.8910174 L44.9400856,57.3601431 L44.9400856,45.1799923 Z M63.3050744,52.9126192 C62.2184634,51.2953377 60.601182,50.486697 58.6553903,50.486697 C56.3558182,50.486697 54.3847565,51.9523583 54.3847565,54.3530104 C54.3847565,59.3564749 61.738333,57.6886534 61.738333,61.2011865 C61.738333,62.7931979 60.4495619,63.5765686 59.0091706,63.5765686 C57.3413491,63.5765686 56.128388,62.7679279 55.3702873,61.3275366 L53.803546,62.3130675 C54.940697,64.2588592 56.7601386,65.2443901 59.0091706,65.2443901 C61.6372529,65.2443901 63.5830446,63.5765686 63.5830446,60.8474062 C63.5830446,56.147182 56.2294681,57.6381134 56.2294681,54.2266603 C56.2294681,52.8115391 57.4424292,52.1545185 58.7312003,52.1545185 C60.1968616,52.1545185 61.1318525,52.8368091 61.9152232,53.9992301 L63.3050744,52.9126192 Z"
}));

/***/ }),

/***/ "./src/logos/index.js":
/*!****************************!*\
  !*** ./src/logos/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectiveWorldLogo": function() { return /* reexport safe */ _components_collectiveworld__WEBPACK_IMPORTED_MODULE_0__.CollectiveWorldLogo; },
/* harmony export */   "CreepyCatalogLogo": function() { return /* reexport safe */ _components_creepycatalog__WEBPACK_IMPORTED_MODULE_1__.CreepyCatalogLogo; },
/* harmony export */   "QuoteCatalogLogo": function() { return /* reexport safe */ _components_quotecatalog__WEBPACK_IMPORTED_MODULE_2__.QuoteCatalogLogo; },
/* harmony export */   "ShopCatalogLogo": function() { return /* reexport safe */ _components_shopcatalog__WEBPACK_IMPORTED_MODULE_3__.ShopCatalogLogo; },
/* harmony export */   "ThoughtCatalogBooksLogo": function() { return /* reexport safe */ _components_thoughtcatalogbooks__WEBPACK_IMPORTED_MODULE_5__.ThoughtCatalogBooksLogo; },
/* harmony export */   "ThoughtCatalogLogo": function() { return /* reexport safe */ _components_thoughtcatalog__WEBPACK_IMPORTED_MODULE_4__.ThoughtCatalogLogo; }
/* harmony export */ });
/* harmony import */ var _components_collectiveworld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/collectiveworld */ "./src/logos/components/collectiveworld.js");
/* harmony import */ var _components_creepycatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/creepycatalog */ "./src/logos/components/creepycatalog.js");
/* harmony import */ var _components_quotecatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quotecatalog */ "./src/logos/components/quotecatalog.js");
/* harmony import */ var _components_shopcatalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shopcatalog */ "./src/logos/components/shopcatalog.js");
/* harmony import */ var _components_thoughtcatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/thoughtcatalog */ "./src/logos/components/thoughtcatalog.js");
/* harmony import */ var _components_thoughtcatalogbooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/thoughtcatalogbooks */ "./src/logos/components/thoughtcatalogbooks.js");







/***/ }),

/***/ "./src/network-list.js":
/*!*****************************!*\
  !*** ./src/network-list.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIconBySite": function() { return /* binding */ getIconBySite; },
/* harmony export */   "getNameBySite": function() { return /* binding */ getNameBySite; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variations.js */ "./src/variations.js");
/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logos */ "./src/logos/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Retrieves the social service's icon component.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {WPComponent} Icon component for social service.
 */

const getIconBySite = name => {
  const variation = _variations_js__WEBPACK_IMPORTED_MODULE_1__["default"].find(v => v.name === name);
  return variation ? variation.icon : _logos__WEBPACK_IMPORTED_MODULE_2__.ThoughtCatalogLogo;
};
/**
 * Retrieves the display name for the social service.
 *
 * @param {string} name key for a social service (lowercase slug)
 *
 * @return {string} Display name for social service
 */

const getNameBySite = name => {
  const variation = _variations_js__WEBPACK_IMPORTED_MODULE_1__["default"].find(v => v.name === name);
  return variation ? variation.title : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Social Icon');
};

/***/ }),

/***/ "./src/variations.js":
/*!***************************!*\
  !*** ./src/variations.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos */ "./src/logos/index.js");
/**
 * Internal dependencies
 */

const variations = [{
  isDefault: false,
  name: 'collectiveworld',
  attributes: {
    service: 'collectiveworld'
  },
  title: 'Collective World',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.CollectiveWorldLogo
}, {
  isDefault: false,
  name: 'creepycatalog',
  attributes: {
    service: 'creepycatalog'
  },
  title: 'Creepy Catalog',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.CreepyCatalogLogo
}, {
  isDefault: false,
  name: 'quotecatalog',
  attributes: {
    service: 'quotecatalog'
  },
  title: 'Quote Catalog',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.QuoteCatalogLogo
}, {
  isDefault: false,
  name: 'shopcatalog',
  attributes: {
    service: 'shopcatalog'
  },
  title: 'Shop Catalog',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.ShopCatalogLogo
}, {
  isDefault: true,
  name: 'thoughtcatalog',
  attributes: {
    service: 'thoughtcatalog'
  },
  title: 'Thought Catalog',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.ThoughtCatalogLogo
}, {
  isDefault: false,
  name: 'thoughtcatalogbooks',
  attributes: {
    service: 'thoughtcatalogbooks'
  },
  title: 'Thought Catalog Books',
  icon: _logos__WEBPACK_IMPORTED_MODULE_0__.ThoughtCatalogBooksLogo
}];
/**
 * Add `isActive` function to all `network link` variations, if not defined.
 * `isActive` function is used to find a variation match from a created
 *  Block by providing its attributes.
 */

variations.forEach(variation => {
  if (variation.isActive) return;

  variation.isActive = (blockAttributes, variationAttributes) => blockAttributes.service === variationAttributes.service;
});
/* harmony default export */ __webpack_exports__["default"] = (variations);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "../../node_modules/@wordpress/icons/build-module/index.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/variations.js");
/**
 * Network Link Block
 */

/**
 * WordPress dependencies
*/


/**
 * Internal dependencies
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cata/network-link', {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__.blockMeta,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map