//Define visibleIndex for properties we want to show and set attribute that marks we want to show this property
var maxVisibleIndex = 0;
function showTheProperty(className, propertyName, visibleIndex) {
    if (!visibleIndex) 
        visibleIndex = ++maxVisibleIndex;
    else {
        if (visibleIndex > maxVisibleIndex) 
            maxVisibleIndex = visibleIndex;
        }
    //Use Survey Serializer to find the property, it looks for property in the class and all it's parents
    var property = Survey
        .Serializer
        .findProperty(className, propertyName)
    if (!property) 
        return;
    property.visibleIndex = visibleIndex;
    //Custom JavaScript attribute that we will use in onShowingProperty event
    property.showProperty = true;
}

Survey.settings.allowShowEmptyTitleInDesignMode = false;

SurveyCreator
    .StylesManager
    .ThemeColors["default"] = {
    "$primary-color": "#2e75b2",
    "$secondary-color": "#cecece",
    "$primary-text-color": "#000",
    "$secondary-text-color": "#212121",
    "$inverted-text-color": "#fff",
    "$primary-hover-color": "#266194",
    "$selection-border-color": "#4a4a4a",
    "$primary-icon-color": "#2e75b2",
    "$primary-bg-color": "#fff",
    "$secondary-bg-color": "#f4f4f4",
    "$primary-border-color": "#cecece",
    "$secondary-border-color": "#ddd",
    "$error-color": "#dd3444"
  };

SurveyCreator
    .StylesManager
    .applyTheme();

var options = {
    showJSONEditorTab: true,
    allowControlSurveyTitleVisibility: false,
    allowEditExpressionsInTextEditor: false,
    designerHeight: '800px',
    generateValidJSON: true,
    hideExpressionHeaderInLogicTab: true,
    isAutoSave: false,
    pageEditMode: "single",
    questionTypes: ["boolean", "checkbox", "comment", "dropdown", "radiogroup", "rating", "text"],
    showDefaultLanguageInTestSurveyTab: "auto",
    showElementEditorAsPropertyGrid: true,
    showEmbeddedSurveyTab: false,
    showInvisibleElementsInTestSurveyTab: false,
    showLogicTab: true,
    showPagesInTestSurveyTab: false,
    showPagesToolbox: false,
    showPropertyGrid: false,
    showState: true,
    showSurveyTitle: "never",
    showTestSurveyTab: true,
    showTitlesInExpressions: false,
    showTranslationTab: true,
    useTabsInElementEditor: true,
};

var creator = new SurveyCreator.SurveyCreator(null, options);

creator.tabs().filter(tab => tab.name === 'designer')[0].title = 'Question Group Builder';
creator.tabs().filter(tab => tab.name === 'test')[0].title = 'Test Question Group';
creator.tabs().filter(tab => tab.name === 'logic')[0].title = 'Question Group Logic';

console.log(creator.tabs());

//Show toolbox in the right container. It is shown on the left by default
//Show property grid in the right container, combined with toolbox
//Make toolbox active by default
creator.showToolbox = "right";
creator.showPropertyGrid = "right";
creator.rightContainerActiveItem("toolbox");
creator.allowModifyPages = false;

showTheProperty("question", "name");
showTheProperty("question", "title");
showTheProperty("question", "description");
showTheProperty("question", "visible");
showTheProperty("question", "isRequired");
showTheProperty("question", "required");
showTheProperty("question", "visibleIf");
showTheProperty("question", "requiredIf");
showTheProperty("question", "valueName");
showTheProperty("question", "defaultValue");
showTheProperty("question", "requiredErrorText");
showTheProperty("question", "validators");

showTheProperty("checkbox", "choices");
showTheProperty("checkbox", "hasOther");
showTheProperty("checkbox", "hasSelectAll");
showTheProperty("checkbox", "hasNone");

showTheProperty("radiogroup", "showClearButton");

showTheProperty("text", "inputType");
// showTheProperty("text", "placeHolder");
// showTheProperty("comment", "placeHolder");
showTheProperty("comment", "rows");

//Use it to show properties that has our showProperty custom attribute equals to true
creator
    .onShowingProperty
    .add(function (sender, options) {
        options.canShow = options.property.showProperty === true;
    });

// //Remove toolbar items except undo/redo buttons
// creator
//     .toolbarItems
//     .splice(6, 6);

//console.log(creator.toolbarItems)

    creator.saveSurveyFunc = function(saveNo, callback) {
        console.log(creator.text)
        //Save the survey definition into a local storage
        //window.localStorage.setItem("YourStorageName", surveyCreator.text);
        !!callback && callback(saveNo, true);
    };

// Adorners for item inplace editing edit itemvalue.value and not itemvalue.text
//creator.inplaceEditForValues = true;
// Hide Fast Entry option for ItemValue[] editor
// creator
//     .onSetPropertyEditorOptions
//     .add(function (sender, options) {
//         options.editorOptions.showTextView = false;
//     });

// // Add title for the sidebar panel
// var rightContainerElement = document.getElementsByClassName("svd-designer-container--right-side")[0];
// var titleDiv = document.createElement("div");
// titleDiv.className = "svd-sidebar-title";
// titleDiv.innerText = "Questions";
// rightContainerElement.insertBefore(titleDiv, rightContainerElement.children[1]);

creator.render("creatorElement");

if (!window.creator && creator !== undefined) {
    window.creator = creator;
}

