(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return s}),n.d(t,"rightToc",function(){return r}),n.d(t,"default",function(){return d});n(0);var a=n(133);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={title:"Gotchas"},r=[{value:"Don't forget the initial section",id:"dont-forget-the-initial-section",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"The datasource involves asynchronous operations",id:"the-datasource-involves-asynchronous-operations",children:[]}],l={rightToc:r},c="wrapper";function d(e){var t=e.components,n=i(e,["components"]);return Object(a.b)(c,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"dont-forget-the-initial-section"})),Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#dont-forget-the-initial-section"}),"#"),"Don't forget the initial section"),Object(a.b)("p",null,"A datasource will initially be totally empty (no items and no sections). Inserting items in section 0 before inserting section 0 will cause an exception to be raised."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-objectivec"}),'CKComponentCollectionViewDataSource datasource = [[CKComponentCollectionViewDataSource alloc] ...];\nCKArrayControllerInputItems items;\nCKArrayControllerSections sections;\nsections.insert(0);\nitems.insert({0, 0}, @"Hello");\n[datasource enqueueChangeset:{sections, items}];\n')),Object(a.b)("div",{class:"note"},Object(a.b)("p",null,"Why not have one section by default? Because implicit/default behaviors can be confusing.\nIf that behavior was implemented as a default but not documented, it would be very confusing when inserting a section at index 0 on a newly created datasource will actually cause it to have two sections (we already have the one created by default).\nObviously documentation would make things better but it's easy to miss a piece of documentation...")),Object(a.b)("h2",null,Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"lifecycle"})),Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#lifecycle"}),"#"),"Lifecycle"),Object(a.b)("p",null,"The lifecycle of the datasource should match the lifecycle of the collection view or table view it is used with. You might otherwise end up with the content of your list view being out of sync with the internal state of the datasource and this will cause a crash eventually."),Object(a.b)("h2",null,Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"the-datasource-involves-asynchronous-operations"})),Object(a.b)("a",o({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#the-datasource-involves-asynchronous-operations"}),"#"),"The datasource involves asynchronous operations"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Each changeset is computed asynchronously")," by ",Object(a.b)("inlineCode",{parentName:"p"},"CKComponentDatasource"),", therefore the corresponding changes are not reflected immediately on the corresponding ",Object(a.b)("inlineCode",{parentName:"p"},"UITableView")," or ",Object(a.b)("inlineCode",{parentName:"p"},"UICollectionView")," and it is important to be careful about sources of data being out of sync."),Object(a.b)("h4",null,Object(a.b)("a",o({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"always-ask-the-datasource-for-the-model-corresponding-to-an-index-path"})),Object(a.b)("a",o({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#always-ask-the-datasource-for-the-model-corresponding-to-an-index-path"}),"#"),"Always ask the datasource for the model corresponding to an index path"),Object(a.b)("p",null,"The datasource maintains an internal data structure which is the only source of truth for the corresponding ",Object(a.b)("inlineCode",{parentName:"p"},"UICollectionView")," or ",Object(a.b)("inlineCode",{parentName:"p"},"UITableView"),". For this reason you should query the datasource to get information associated with a certain indexPath. Any other source of data may be out of sync with the current state of the list view."),Object(a.b)("p",null,"For instance to access the model associated to a certain index path using a ",Object(a.b)("inlineCode",{parentName:"p"},"CKCollectionViewDataSource")," you can use:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-objectivec"}),"[datasource modelForItemAtIndexPath:indexPath];\n")),Object(a.b)("p",null,"Now let's look at what could go wrong if we query another source of data."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-objectivec"}),"@implementation MyAwesomeController {\n    CKComponentCollectionViewDataSource *_datasource;\n    NSMutableArray *_listOfModels;\n}\n\n- (void)insertAtHead:(id)model {\n// We first add the new model (B) at the beginning of _listOfModels which already contained (A)\n    // [A] -> [B, A]\n  [_listOfModels insertObject:model atIndex:0];\n  CKArrayControllerInputItems items;\n  items.insert({0, 0});\n  // Enqueue the changeset asynchronously in the datasource\n  [_datasource enqueueChangeset:{{}, items}];\n}\n\n- (void)didSelectitemAtIndexPath:(NSIndexPath *)indexPath {\n// At the same time the user taps on the cell that represents A, which is still located at the indexPath (0,0)\n// as the changeset has not finished computing yet.\n// Ouch we actually get B, list of models and the collection view are out of sync\n[_listOfModels objectAtIndex:indexPath.row];\n// [_datasource modelForItemAtIndexPath:indexPath] would have properly returned A\n}\n")),Object(a.b)("h4",null,Object(a.b)("a",o({parentName:"h4"},{"aria-hidden":!0,className:"anchor",id:"dont-ask-the-the-list-view-for-the-position-of-the-next-insertion"})),Object(a.b)("a",o({parentName:"h4"},{"aria-hidden":!0,className:"hash-link",href:"#dont-ask-the-the-list-view-for-the-position-of-the-next-insertion"}),"#"),"Don't ask the the list view for the position of the next insertion"),Object(a.b)("p",null,"The datasource gives you the current state of what is displayed on the screen, but it doesn't include what is potentially currently being computed in the background. To get this information you need to maintain state that is updated at the same time as a changeset is enqueued."),Object(a.b)("p",null,"Let's look at this buggy code that uses the datasource to compute the insertion index."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-objectivec-redhighlight"}),"@implementation MyAwesomeController {\n    CKComponentCollectionViewDataSource *_datasource;\n    NSMutableArray *_listOfModels;\n}\n\n- (void)insertAtTail:(id)model {\n// We first add the new model (C) at the end of _listOfModels which already contains (A) et (B)\n    // [A, B] -> [A, B, C]\n  [_listOfModels addObject:model];\n  CKArrayControllerInputItems items;\n  // Only A is in the tableView, the components for B are still computed in the background\n  // so numberOfItemsInSection returns 1, C will be inserted at index 1 and we will end up\n  // with a list view displaying [A, C, B]\n  Items.insert({0, _datasource.collectionView numberOfItemsInSection});\n  // Enqueue the changeset asynchronously in the datasource\n  [_datasource enqueueChangeset:{{}, items}];\n}\n")),Object(a.b)("p",null,"In ",Object(a.b)("inlineCode",{parentName:"p"},"-insertAtTail")," we should check ",Object(a.b)("inlineCode",{parentName:"p"},"_listOfModels")," instead to compute the insertion index."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-objectivec"}),"- (void)insertAtTail:(id)model {\n// We first add the new model (C) at the end of _listOfModels which already contains (A) et (B)\n    // [A, B] -> [A, B, C]\n  [_listOfModels addObject:model];\n  CKArrayControllerInputItems items;\n  // We properly insert C at index 2\n  Items.insert({0, [_listOfModels count] ? [_listOfModels count] -1 : 0});\n  // Enqueue the changeset asynchronously in the datasource\n  [_datasource enqueueChangeset:{{}, items}];\n}\n")))}d.isMDXComponent=!0}}]);