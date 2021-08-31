Survey
    .StylesManager
    .applyTheme("bootstrap");
Survey.defaultBootstrapCss.completeButton = "btn btn-green";

var json = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "boolean",
                    "name": "Safety Concerns",
                    "title": "Are there safety concerns or an emergent situation happening today that requires intervention or a supervisory discussion?",
                    "isRequired": true
                },
                {
                    "type": "dropdown",
                    "name": "Action Taken",
                    "visible": false,
                    "visibleIf": "{Safety Concerns} = true",
                    "title": "What action was taken?",
                    "requiredIf": "{Safety Concerns} = true",
                    "choices": [
                        {
                            "value": "Consulted with Supervisor",
                            "text": "Consulted with Supervisor"
                        },
                        {
                            "value": "Safety Plan Established",
                            "text": "Safety Plan Established"
                        },
                        {
                            "value": "Police took Custody",
                            "text": "Police took Custody"
                        },
                        {
                            "value": "Emergency Protection Order",
                            "text": "Emergency Protection Order"
                        }
                    ],
                    "hasOther": true
                },
                {
                    "type": "comment",
                    "name": "Directive Given",
                    "visible": false,
                    "visibleIf": "{Action Taken} = 'Consulted with Supervisor'",
                    "title": "Describe the directive given by the supervisor",
                    "enableIf": "{Action Taken} = 'Consulted with Supervisor'",
                    "requiredIf": "{Action Taken} = 'Consulted with Supervisor'"
                }
            ]
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

$("#surveyElement").Survey({ model: survey });