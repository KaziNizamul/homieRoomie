export const json = {
  "title": "Homie Roomie Survey",
  "description": "Comfortness matter!!!",
  "logoFit": "none",
  "logoPosition": "right",
  "completedHtml": "<h3>Thank you for completing the survey</h3><div style=\"margin: 40px 0; width:100%\"><button style=\"margin: auto\" class=\"v2-class---button v2-class---button--primary v2-class---button--large\" onclick=\"reRunSurvey();\"><span class=\"v2-class---button__text v2-class---button__text--secondary v2-class---button__text--large\">Run survey again</span></button></div>",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "discovery-source",
      "title": "Full Name",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question3",
      "title": "Gender",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Male"
       },
       {
        "value": "Item 2",
        "text": " Female"
       }
      ]
     }
    ]
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "text",
      "name": "question1",
      "title": "Age",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "text",
      "name": "social-media-platform",
      "visible": false,
      "title": "Current City"
     }
    ]
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "text",
      "name": "question2",
      "title": "WhatsApp Number",
      "isRequired": true
     }
    ]
   },
   {
    "name": "page5",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question5",
      "title": "Are you willing to Travel to Canada together with someone?",
      "choices": [
       {
        "value": "Item 1",
        "text": "Yes "
       },
       {
        "value": "Item 2",
        "text": "No"
       },
       {
        "value": "Item 3",
        "text": "Maybe"
       }
      ]
     }
    ]
   },
   {
    "name": "page6",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question6",
      "title": "Room Preference ",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 2",
        "text": " Private"
       },
       {
        "value": "Item 3",
        "text": "Shared"
       },
       {
        "value": "Item 4",
        "text": "Either is fine"
       }
      ]
     }
    ]
   },
   {
    "name": "page7",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question7",
      "visibleIf": "{question6} = 'Item 3'",
      "title": "Whom you looking as your roommates?",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Boy"
       },
       {
        "value": "Item 2",
        "text": "Girl "
       },
       {
        "value": "Item 3",
        "text": "Either is fine"
       }
      ]
     }
    ]
   },
   {
    "name": "page8",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question8",
      "title": "Approximate rent you're willing to pay (CAD per month) including utilities",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "400-600 CAD"
       },
       {
        "value": "Item 2",
        "text": "500-800 CAD"
       }
      ]
     }
    ]
   },
   {
    "name": "page9",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question9",
      "title": "What are your food preferences?",
      "choices": [
       {
        "value": "Item 1",
        "text": "Vegetarian"
       },
       {
        "value": "Item 2",
        "text": "Eggetarian"
       },
       {
        "value": "Item 3",
        "text": "Non-Vegetarian"
       },
       {
        "value": "Item 4",
        "text": "Jain"
       }
      ]
     }
    ]
   },
   {
    "name": "page10",
    "elements": [
     {
      "type": "checkbox",
      "name": "question10",
      "title": "What are your desired Food Preferences from your roommates?",
      "choices": [
       {
        "value": "Item 1",
        "text": "Vegetarian"
       },
       {
        "value": "Item 2",
        "text": "Non Vegetarian"
       },
       {
        "value": "Item 3",
        "text": "Eggetarian"
       },
       {
        "value": "Item 4",
        "text": "Jain"
       }
      ]
     }
    ]
   },
   {
    "name": "page11",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question11",
      "title": "Do you know cooking?",
      "choices": [
       {
        "value": "Item 1",
        "text": "Yes"
       },
       {
        "value": "Item 2",
        "text": "No"
       },
       {
        "value": "Item 3",
        "text": "Will learn"
       }
      ]
     }
    ]
   },
   {
    "name": "page12",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question12",
      "title": "Do you smoke?",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Yes"
       },
       {
        "value": "Item 2",
        "text": "No"
       }
      ]
     }
    ]
   },
   {
    "name": "page13",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question13",
      "title": "Do you drink?",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Yes"
       },
       {
        "value": "Item 2",
        "text": "No"
       }
      ]
     }
    ]
   },
   {
    "name": "page14",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question15",
      "title": "Are you okay to share a room with a Drinker?",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Yes"
       },
       {
        "value": "Item 2",
        "text": "No"
       }
      ]
     }
    ]
   },
   {
    "name": "page15",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question14",
      "title": "Are you okay to share a room with a Smoker?",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Yes"
       },
       {
        "value": "Item 2",
        "text": "No"
       }
      ]
     }
    ]
   },
   {
    "name": "page16",
    "elements": [
     {
      "type": "checkbox",
      "name": "question4",
      "title": "What do you like to do for fun? Hobbies?",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Reading & Writing"
       },
       {
        "value": "Item 2",
        "text": "Drawing, painting, or sketching"
       },
       {
        "value": "Item 3",
        "text": "Playing a musical instrument "
       },
       {
        "value": "Item 4",
        "text": "Travelling,trekking"
       },
       {
        "value": "Item 5",
        "text": "Gaming,coding"
       },
       {
        "value": "Item 6",
        "text": "Sports"
       },
       {
        "value": "Item 7",
        "text": "movies,webseries, listening to songs"
       },
       {
        "value": "Item 8",
        "text": "Cooking or baking"
       }
      ]
     }
    ]
   },
   {
    "name": "page17",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question16",
      "title": "Do you have any other preferences for a roommate? ",
      "choices": [
       {
        "value": "Item 1",
        "text": "Yes"
       },
       {
        "value": "Item 2",
        "text": "No"
       }
      ]
     }
    ]
   },
   {
    "name": "page18",
    "elements": [
     {
      "type": "checkbox",
      "name": "question17",
      "visibleIf": "{question16} = 'Item 1'",
      "title": "If you have preferences, choose from the below",
      "choices": [
       {
        "value": "Item must be respectfulSomeone who enjoys spontaneous dance parties or karaoke sessions",
        "text": "Must be clean and organized "
       },
       {
        "value": "Item 2",
        "text": "Must be respectful and is considerate of your privacy, space, and belongings."
       },
       {
        "value": "Item 3",
        "text": "Must be Communicative, honest about any concerns, issues, or changes in plans."
       },
       {
        "value": "Item 4",
        "text": "Someone who enjoys spontaneous dance parties or binge watching and chilling"
       },
       {
        "value": "Item 5",
        "text": "Someone who is a night owl and is happy to stay up late coding or chatting or even discuss topics"
       },
       {
        "value": "Item 6",
        "text": "Must focus on studies and be serious about curriculum"
       },
       {
        "value": "Item 7",
        "text": "Someone who is supportive with one another and understanding"
       },
       {
        "value": "Item 8",
        "text": "Someone who accompanies to explore nearby during leisure time and not a complete introvert"
       }
      ]
     }
    ]
   }
  ],
  "showProgressBar": "top",
  "progressBarType": "questions",
  "widthMode": "static",
  "width": "864px"
 }