var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["bootstrap"];
defaultThemeColors["$main-color"] = "#2e75b2";
defaultThemeColors["$main-hover-color"] = "#266194";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#2e75b2";

defaultThemeColors["$header-background-color"] = "#4a4a4a";
defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

Survey
    .StylesManager
    .applyTheme("bootstrap");

var json = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "Simple single input"
                },
                {
                    "type": "checkbox",
                    "name": "question2",
                    "title": "Check boxes, take your pick!",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Vanilla"
                        },
                        {
                            "value": "item2",
                            "text": "Chocolate"
                        },
                        {
                            "value": "item3",
                            "text": "Jamoca Almond Fudge"
                        }
                    ],
                    "hasOther": true,
                    "hasNone": true,
                    "hasSelectAll": true
                },
                {
                    "type": "radiogroup",
                    "name": "question3",
                    "title": "Radio, only one for you",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Metal"
                        },
                        {
                            "value": "item2",
                            "text": "Pop"
                        },
                        {
                            "value": "item3",
                            "text": "Classical"
                        }
                    ],
                    "hasOther": true,
                    "hasNone": true
                },
                {
                    "type": "dropdown",
                    "name": "question4",
                    "title": "Drop downs are cool",
                    "choices": [
                        "item1",
                        "item2",
                        "item3"
                    ],
                    "hasOther": true
                },
                {
                    "type": "comment",
                    "name": "question5",
                    "title": "Comments for when you have a lot to say"
                },
                {
                    "type": "rating",
                    "name": "question6",
                    "title": "Tell us how much you like to rate stuff"
                },
                {
                    "type": "ranking",
                    "name": "question7",
                    "title": "Rank these things based on your preference",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Summer"
                        },
                        {
                            "value": "item2",
                            "text": "Winter"
                        },
                        {
                            "value": "item3",
                            "text": "Fall"
                        },
                        {
                            "value": "item4",
                            "text": "Spring"
                        }
                    ]
                },
                {
                    "type": "imagepicker",
                    "name": "question8",
                    "title": "Pick your favorite",
                    "choices": [
                        {
                            "value": "lion",
                            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
                        },
                        {
                            "value": "giraffe",
                            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
                        },
                        {
                            "value": "panda",
                            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
                        },
                        {
                            "value": "camel",
                            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
                        }
                    ]
                },
                {
                    "type": "signaturepad",
                    "name": "question9",
                    "title": "Please sign below"
                },
                {
                    "type": "file",
                    "name": "question10",
                    "title": "Upload a file???",
                    "maxSize": 0
                },
                {
                    "type": "matrix",
                    "name": "question11",
                    "title": "Single choice matrix",
                    "columns": [
                        "Cold",
                        "Room Temp",
                        "Hot"
                    ],
                    "rows": [
                        "Sake",
                        "Red Wine"
                    ]
                },
                {
                    "type": "matrixdropdown",
                    "name": "question12",
                    "title": "Multi choice matrix, choose your input!",
                    "columns": [
                        {
                            "name": "Column 1",
                            "cellType": "dropdown"
                        },
                        {
                            "name": "Column 2",
                            "cellType": "text"
                        },
                        {
                            "name": "Column 3",
                            "cellType": "boolean"
                        }
                    ],
                    "choices": [
                        1,
                        2,
                        3,
                        4,
                        5
                    ],
                    "rows": [
                        "Row 1",
                        "Row 2"
                    ]
                },
                {
                    "type": "matrixdynamic",
                    "name": "question13",
                    "title": "Dynamic multi-choice!  ",
                    "columns": [
                        {
                            "name": "Column 1"
                        },
                        {
                            "name": "Column 2",
                            "cellType": "text"
                        },
                        {
                            "name": "Column 3",
                            "cellType": "radiogroup"
                        }
                    ],
                    "choices": [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "question14",
                    "title": "Multiple single line text input",
                    "items": [
                        {
                            "name": "text1"
                        },
                        {
                            "name": "text2"
                        }
                    ]
                }
            ],
            "title": "Demo of Provided Question Types",
            "description": "This also demos the title (above) and description (this thing you are reading).  Does not include panels or conditional functionality."
        }
    ],
    "showQuestionNumbers": "off",
    "showCompletedPage": false
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        sender.clear(false);
        sender.mode = "display";
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });

fetch("./custom-css.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
        survey.css = data;
        survey.render("surveyElement")
    });

//$("#surveyElement").Survey({ model: survey });