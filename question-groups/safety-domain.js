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
           "type": "panel",
           "name": "Safety Domain Information",
           "elements": [
            {
             "type": "panel",
             "name": "panel1",
             "elements": [
              {
               "type": "boolean",
               "name": "Q1 More Info",
               "title": "Do you know the nature and type of maltreatment?",
               "hideNumber": true,
               "valueName": "safetyDomainQ1",
               "correctAnswer": "No new or additional information",
               "isRequired": true,
               "requiredErrorText": "Please indicate if there is new or additional information.",
               "labelFalse": "No new or additional information",
               "valueTrue": "Yes",
               "valueFalse": "No new or additional information"
              },
              {
               "type": "comment",
               "name": "Q1 Detail",
               "visible": false,
               "visibleIf": "{safetyDomainQ1} = 'Yes'",
               "title": "Do you know the nature and type of maltreatment?",
               "titleLocation": "hidden",
               "hideNumber": true,
               "valueName": "safetyDomainQ1Detail",
               "isRequired": true,
               "requiredErrorText": "Please provide new or additional information."
              }
             ]
            },
            {
             "type": "panel",
             "name": "panel2",
             "elements": [
              {
               "type": "boolean",
               "name": "Q2 More Info",
               "title": "Do you know how the children are functioning, including their condition?",
               "hideNumber": true,
               "valueName": "safetyDomainQ2",
               "correctAnswer": "No new or additional information",
               "isRequired": true,
               "requiredErrorText": "Please indicate if there is new or additional information.",
               "labelFalse": "No new or additional information",
               "valueTrue": "Yes",
               "valueFalse": "No new or additional information"
              },
              {
               "type": "comment",
               "name": "Q2 Detail",
               "visible": false,
               "visibleIf": "{safetyDomainQ2} = 'Yes'",
               "title": "Do you know how the children are functioning, including their condition?",
               "titleLocation": "hidden",
               "hideNumber": true,
               "valueName": "safetyDomainQ2Detail",
               "isRequired": true,
               "requiredErrorText": "Please provide new or additional information."
              }
             ]
            },
            {
             "type": "panel",
             "name": "panel3",
             "elements": [
              {
               "type": "boolean",
               "name": "Q3 More Info",
               "title": "Do you know how the adult(s) are functioning, including substance use and behavioral health?",
               "hideNumber": true,
               "valueName": "safetyDomainQ3",
               "correctAnswer": "No new or additional information",
               "isRequired": true,
               "requiredErrorText": "Please indicate if there is new or additional information.",
               "labelFalse": "No new or additional information",
               "valueTrue": "Yes",
               "valueFalse": "No new or additional information"
              },
              {
               "type": "comment",
               "name": "Q3 Detail",
               "visible": false,
               "visibleIf": "{safetyDomainQ3} = 'Yes'",
               "title": "Do you know how the adult(s) are functioning, including substance use and behavioral health?",
               "titleLocation": "hidden",
               "hideNumber": true,
               "valueName": "safetyDomainQ3Detail",
               "isRequired": true,
               "requiredErrorText": "Please provide new or additional information."
              }
             ]
            },
            {
             "type": "panel",
             "name": "panel4",
             "elements": [
              {
               "type": "boolean",
               "name": "Q4 More Info",
               "title": "Do you know how the caregivers generally parent (i.e. knowledge, skill, protectiveness, history)?",
               "hideNumber": true,
               "valueName": "safetyDomainQ4",
               "correctAnswer": "No new or additional information",
               "isRequired": true,
               "requiredErrorText": "Please indicate if there is new or additional information.",
               "labelFalse": "No new or additional information",
               "valueTrue": "Yes",
               "valueFalse": "No new or additional information"
              },
              {
               "type": "comment",
               "name": "Q4 Detail",
               "visible": false,
               "visibleIf": "{safetyDomainQ4} = 'Yes'",
               "title": "Do you know how the caregivers generally parent (i.e. knowledge, skill, protectiveness, history)?",
               "titleLocation": "hidden",
               "hideNumber": true,
               "valueName": "safetyDomainQ4Detail",
               "isRequired": true,
               "requiredErrorText": "Please provide new or additional information."
              }
             ]
            },
            {
             "type": "panel",
             "name": "panel5",
             "elements": [
              {
               "type": "boolean",
               "name": "Q5 More Info",
               "title": "Do you know how the caregivers disipline the child(ren)?",
               "hideNumber": true,
               "valueName": "safetyDomainQ5",
               "correctAnswer": "No new or additional information",
               "isRequired": true,
               "requiredErrorText": "Please indicate if there is new or additional information.",
               "labelFalse": "No new or additional information",
               "valueTrue": "Yes",
               "valueFalse": "No new or additional information"
              },
              {
               "type": "comment",
               "name": "Q5 Detail",
               "visible": false,
               "visibleIf": "{safetyDomainQ5} = 'Yes'",
               "title": "Do you know how the caregivers disipline the child(ren)?",
               "titleLocation": "hidden",
               "hideNumber": true,
               "valueName": "safetyDomainQ5Detail",
               "isRequired": true,
               "requiredErrorText": "Please provide new or additional information."
              }
             ]
            },
            {
             "type": "panel",
             "name": "panel6",
             "elements": [
              {
               "type": "boolean",
               "name": "Q6 More Info",
               "title": "Do you have any additional information?",
               "hideNumber": true,
               "valueName": "safetyDomainQ6",
               "correctAnswer": "No new or additional information",
               "isRequired": true,
               "requiredErrorText": "Please indicate if there is new or additional information.",
               "labelFalse": "No new or additional information",
               "valueTrue": "Yes",
               "valueFalse": "No new or additional information"
              },
              {
               "type": "comment",
               "name": "Q6 Detail",
               "visible": false,
               "visibleIf": "{safetyDomainQ6} = 'Yes'",
               "title": "Do you have any additional information?",
               "titleLocation": "hidden",
               "hideNumber": true,
               "valueName": "safetyDomainQ6Detail",
               "isRequired": true,
               "requiredErrorText": "Please provide new or additional information."
              }
             ]
            }
           ],
           "title": "SAFETY DOMAIN INFORMATION"
          },
          {
           "type": "dropdown",
           "name": "Safety Decision",
           "title": "Safety Decision",
           "hideNumber": true,
           "isRequired": true,
           "requiredErrorText": "Please select a safety decision.",
           "choices": [
            {
             "value": "Safe",
             "text": "Safe"
            },
            {
             "value": "Safe with a Comprehensive Safety Plan",
             "text": "Safe with a Comprehensive Safety Plan"
            },
            {
             "value": "Unsafe",
             "text": "Unsafe"
            }
           ]
          },
          {
           "type": "radiogroup",
           "name": "homeAssesmentQ1",
           "title": "Are there any changes in the household that impact the safety and risk of abuse or neglect for the children?",
           "hideNumber": true,
           "correctAnswer": "No",
           "isRequired": true,
           "choices": [
            {
             "value": "Yes",
             "text": "Yes"
            },
            {
             "value": "No",
             "text": "No"
            }
           ],
           "hasNone": true,
           "noneText": "Not Applicable",
           "colCount": 3
          },
          {
           "type": "radiogroup",
           "name": "homeAssesmentQ2",
           "title": "Did you make efforts to find family members, including fathers, and other natural supports for the family?",
           "hideNumber": true,
           "correctAnswer": "Yes",
           "isRequired": true,
           "choices": [
            {
             "value": "Yes",
             "text": "Yes"
            },
            {
             "value": "No",
             "text": "No"
            }
           ],
           "hasNone": true,
           "noneText": "Not Applicable",
           "colCount": 3
          },
          {
           "type": "radiogroup",
           "name": "homeAssesmentQ3",
           "title": "If this is a placement case, did you talk with the family about ASFA timelines/concurrent planning?",
           "hideNumber": true,
           "isRequired": true,
           "choices": [
            {
             "value": "Yes",
             "text": "Yes"
            },
            {
             "value": "No",
             "text": "No"
            }
           ],
           "hasNone": true,
           "noneText": "Not Applicable",
           "colCount": 3
          },
          {
           "type": "radiogroup",
           "name": "homeAssesmentQ4",
           "title": "Did you discuss with the family the reason we are open in the home?",
           "hideNumber": true,
           "correctAnswer": "Yes",
           "isRequired": true,
           "choices": [
            {
             "value": "Yes",
             "text": "Yes"
            },
            {
             "value": "No",
             "text": "No"
            }
           ],
           "hasNone": true,
           "noneText": "Not Applicable",
           "colCount": 3
          },
          {
           "type": "radiogroup",
           "name": "homeAssesmentQ5",
           "title": "Do the circumstances surounding case opening still exist in the home today?",
           "hideNumber": true,
           "correctAnswer": "No",
           "isRequired": true,
           "choices": [
            {
             "value": "Yes",
             "text": "Yes"
            },
            {
             "value": "No",
             "text": "No"
            }
           ],
           "hasNone": true,
           "noneText": "Not Applicable",
           "colCount": 3
          },
          {
           "type": "radiogroup",
           "name": "homeAssesmentQ6",
           "title": "Are the demographics/contact information up to date/new individuals in the home?",
           "hideNumber": true,
           "correctAnswer": "Yes",
           "isRequired": true,
           "choices": [
            {
             "value": "Yes",
             "text": "Yes"
            },
            {
             "value": "No",
             "text": "No"
            }
           ],
           "hasNone": true,
           "noneText": "Not Applicable",
           "colCount": 3
          },
          {
           "type": "radiogroup",
           "name": "homeAssesmentQ7",
           "title": "Did you discuss the FSP objectives with the family regarding progress and compliance?",
           "hideNumber": true,
           "correctAnswer": "Yes",
           "isRequired": true,
           "choices": [
            {
             "value": "Yes",
             "text": "Yes"
            },
            {
             "value": "No",
             "text": "No"
            }
           ],
           "hasNone": true,
           "noneText": "Not Applicable",
           "colCount": 3
          },
          {
           "type": "radiogroup",
           "name": "homeAssesmentQ8",
           "title": "Are there concerns about eviction, shut-off notices, loss of job, or other financial concerns?",
           "hideNumber": true,
           "correctAnswer": "No",
           "isRequired": true,
           "choices": [
            {
             "value": "Yes",
             "text": "Yes"
            },
            {
             "value": "No",
             "text": "No"
            }
           ],
           "hasNone": true,
           "noneText": "Not Applicable",
           "colCount": 3
          },
          {
           "type": "radiogroup",
           "name": "homeAssesmentQ9",
           "title": "Did you speak with the children individually and privately?",
           "hideNumber": true,
           "correctAnswer": "Yes",
           "isRequired": true,
           "choices": [
            {
             "value": "Yes",
             "text": "Yes"
            },
            {
             "value": "No",
             "text": "No"
            }
           ],
           "hasNone": true,
           "noneText": "Not Applicable",
           "colCount": 3
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