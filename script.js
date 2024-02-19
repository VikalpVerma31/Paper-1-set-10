const questions = [
    {
        question:"We have bought _________ LCD television set.",
        answers: [
            { text: "a", correct: false},
            { text: "an", correct: true},
            { text: "the", correct: false},
            { text: "zero artoicle", correct: false},
        ] 
    },

    {
        question:"Iron is _______ useful metal.",
        answers: [
            { text: "a", correct: true},
            { text: "an", correct: false},
            { text: "The", correct: false},
            { text: "zero article", correct: false},
        ] 
    },

    {
        question:"My cousin is now a student at _________ Michigan University",
        answers: [
            { text: "a", correct: false},
            { text: "an", correct: false},
            { text: "the", correct: true},
            { text: "Zero article", correct: false},
        ] 
    },

    {
        question:"Let's watch _______ movie;I mean 'Pather Panchali'.",
        answers: [
            { text: "a", correct: false},
            { text: "an", correct: false},
            { text: "the", correct: true},
            { text: "no article is needed.", correct: false},
        ] 
    },

    {
        question:"The new foreign policy has invited a lot of appreciation from ......... opposition.",
        answers: [
            { text: "an", correct: false},
            { text: "a", correct: false},
            { text: "the", correct: true},
            { text: "No article is needed", correct: false},
        ] 
    },

    {
        question:"London is on _________ Thames..",
        answers: [
            { text: "an", correct: false},
            { text: "a", correct: false},
            { text: "the", correct: true},
            { text: "No article is needed", correct: false},
        ] 
    },

    {
        question:"_______ Man is mortal.",
        answers: [
            { text: "the", correct: false},
            { text: "an", correct: false},
            { text: "a", correct: false},
            { text: "no article", correct: true},
        ] 
    },

    {
        question:"It is a long drive to _______ airport.",
        answers: [
            { text: "an", correct: false},
            { text: "the", correct: true},
            { text: "a", correct: false},
            { text: "no article is needed", correct: false},
        ] 
    },

    {
        question:"She is staying at_________ hotel in ___________ small town in Colorado.",
        answers: [
            { text: "a ; the", correct: false},
            { text: "a ; a", correct: true},
            { text: " the ; a", correct: false},
            { text: "the ; the", correct: false},
        ] 
    },

    {
        question:"A book is like _________ mirror.",
        answers: [
            { text: "the", correct: false},
            { text: "an", correct: false},
            { text: "a", correct: true},
            { text: "no article", correct: false},
        ] 
    },

    {
        question:"Did you get married after leaving ________ University?",
        answers: [
            { text: "an", correct: false},
            { text: "the", correct: true},
            { text: "a", correct: false},
            { text: "No article required", correct: false},
        ] 
    },

    {
        question:"None but _________ brave deserves the fair.",
        answers: [
            { text: "the", correct: true},
            { text: "a", correct: false},
            { text: "an", correct: false},
            { text: "No article required", correct: false},
        ] 
    },

    {
        question:" Kolkata is __________ London of India.",
        answers: [
            { text: "an", correct: false},
            { text: "a", correct: false},
            { text: "the", correct: true},
            { text: "No article is needed", correct: false},
        ] 
    },

    {
        question:"This cost me _________ hundred rupees.",
        answers: [
            { text: "the", correct: false},
            { text: "a", correct: true},
            { text: "an", correct: false},
            { text: "No article is needed.", correct: false},
        ] 
    },

    {
        question:"We have bought _________ LCD television set.",
        answers: [
            { text: "a", correct: false},
            { text: "an", correct: true},
            { text: "the", correct: false},
            { text: "zero article", correct: false},
        ] 
    },

    {
        question:"He is not _________ honourable man.",
        answers: [
            { text: "a", correct: false},
            { text: "an", correct: true},
            { text: "the", correct: false},
            { text: "none of these", correct: false},
        ] 
    },

    {
        question:"He was elected ......... chairman of the board.",
        answers: [
            { text: "the", correct: false},
            { text: "a", correct: false},
            { text: "an", correct: false},
            { text: "No article is needed", correct: true},
        ] 
    },

    {
        question:"A bird in hand is worth two in ________ bush.",
        answers: [
            { text: "the", correct: true},
            { text: "an", correct: false},
            { text: "a", correct: false},
            { text: "no article", correct: false},
        ] 
    },

    {
        question:"It is ________ one-day cricket match.",
        answers: [
            { text: "a", correct: true},
            { text: "an", correct: false},
            { text: "the", correct: false},
            { text: "zero article", correct: false},
        ] 
    },

    {
        question:"He is _________ honorary Magistrate.",
        answers: [
            { text: "a", correct: false},
            { text: "an", correct: true},
            { text: "the", correct: false},
            { text: " zero article", correct: false},
        ] 
    },

    {
        question:"You are _________ fool to say that.",
        answers: [
            { text: "a", correct: true},
            { text: "an", correct: false},
            { text: "the", correct: false},
            { text: "zero articles", correct: false},
        ] 
    },

    {
        question:"Copper is __________ Useful metal",
        answers: [
            { text: "a", correct: true},
            { text: "an", correct: false},
            { text: "the", correct: false},
            { text: "Zero article", correct: false},
        ] 
    },

    {
        question:"__________ book you want is out of print.",
        answers: [
            { text: "an", correct: false},
            { text: "the", correct: true},
            { text: "a", correct: false},
            { text: "none of these", correct: false},
        ] 
    },

    {
        question:" _________ rich and poor, young and old met together.",
        answers: [
            { text: "a", correct: false},
            { text: "an", correct: false},
            { text: "the", correct: false},
            { text: "zero article", correct: true},
        ] 
    },

    {
        question:"Last year I spent _______ few days in Mumbai with a cousin from America.",
        answers: [
            { text: "a", correct: true},
            { text: "an", correct: false},
            { text: "the", correct: false},
            { text: "Zero article", correct: false},
        ] 
    },

    {
        question:"दादी बच्चों को बुला रही है। इस वाक्य में ‘बच्चों को ’ कौन-सा कारक है ?-",
        answers: [
            { text: "कर्म कारक", correct: true},
            { text: "कर्ता कारक", correct: false},
            { text: "संप्रदान कारक", correct: false},
            { text: "अपादान कारक", correct: false},
        ] 
    },

    {
        question:"‘भूखे को भोजन दो।’ इस वाक्य में ‘को’ कौन-सा कारक है ?",
        answers: [
            { text: "कर्म", correct: false},
            { text: "करण", correct: false},
            { text: "सम्प्रदान", correct: true},
            { text: "अपादान", correct: false},
        ] 
    },

    {
        question:"‘वृक्ष पर पक्षी बैठें हैं।’ इस वाक्य में ‘पर’ कौन-सा कारक है?",
        answers: [
            { text: "कर्म", correct: false},
            { text: "सम्प्रदान", correct: false},
            { text: "अपादान", correct: false},
            { text: "अधिकरण", correct: true},
        ] 
    },

    {
        question:"‘गरीबों को वस्त्र दो’ वाक्य में कारक हैं-",
        answers: [
            { text: "करण कारक", correct: false},
            { text: "अपादान कारक", correct: false},
            { text: "सम्प्रदान कारक", correct: true},
            { text: "कर्म कारक", correct: false},
        ] 
    },

    {
        question:"लोग साँपों से बहुत डरते हैं। इस वाक्य में ‘साँपों से’ कौन-सा कारक है?-",
        answers: [
            { text: "अपादान कारक", correct: true},
            { text: "करण कारक", correct: false},
            { text: "कर्त्ता कारक", correct: false},
            { text: "संप्रदान कारक", correct: false},
        ] 
    },

    {
        question:"रमेश जयपुर से दिल्ली जा रहा है। इस वाक्य में कारक है-",
        answers: [
            { text: "सम्बन्ध", correct: false},
            { text: "अपादान", correct: true},
            { text: "करण", correct: false},
            { text: "सम्प्रदान", correct: false},
        ] 
    },

    {
        question:"उत्तमपुरुष बहुवचन सम्बन्ध कारक है-",
        answers: [
            { text: "तुम्हारा", correct: false},
            { text: "उसका", correct: false},
            { text: "मेरा", correct: true},
            { text: "हमारा", correct: false},
        ] 
    },

    {
        question:"‘वह छत से गिर पड़ा’ – यह किस कारक का उदारहण है ?",
        answers: [
            { text: "अपादान कारक", correct: true},
            { text: "कर्ता कारक", correct: false},
            { text: "कर्म कारक ", correct: false},
            { text: "अधिकरण कारक", correct: false},
        ] 
    },

    {
        question:"मैं आपकी शरण में आया हूँ।’ इस वाक्य में ‘मैं’ किस कारक की विभक्ति है ?",
        answers: [
            { text: "करण", correct: false},
            { text: "अधिकरण", correct: true},
            { text: "कर्म", correct: false},
            { text: "संबंध", correct: false},
        ] 
    },

    {
        question:" कारक के कितने भेद है ?",
        answers: [
            { text: "सात", correct: false},
            { text: "आठ", correct: true},
            { text: "नौ", correct: false},
            { text: "दस", correct: false},
        ] 
    },

    {
        question:" किस वाक्य में अपादान कारक है?",
        answers: [
            { text: "राम ने रावण को तीर से मारा।", correct: false},
            { text: "मोहन से अब सहा नहीं जाता।", correct: false},
            { text: "हिमालय से गंगा निकलती है।", correct: true},
            { text: "चाकू से फल काटो ।", correct: false},
        ] 
    },

    {
        question:"‘राम ने भिखारी को पैसे दिए। इस वाक्य में ‘को’ किस कारक की विभक्ति है ?",
        answers: [
            { text: "कर्म", correct: false},
            { text: "सम्प्रदान", correct: true},
            { text: "संबंध", correct: false},
            { text: "करण", correct: false},
        ] 
    },

    {
        question:"मीरा को गन्दगी से बहुत घृणा है। इस वाक्य में ‘से’ किस कारक की विभक्ति है ?",
        answers: [
            { text: "करण", correct: true},
            { text: "अपादान", correct: false},
            { text: "संबंध", correct: false},
            { text: "कर्म", correct: false},
        ] 
    },

    {
        question:"‘के लिए’ किस कारक का चिह्न है ?",
        answers: [
            { text: "कर्म", correct: false},
            { text: "सम्प्रदान", correct: true},
            { text: "सम्बन्ध", correct: false},
            { text: "अपादान", correct: false},
        ] 
    },

    {
        question:"“मेरे घर से आपका घर पाँच किलोमीटर दूर है।” इस वाक्य में ‘घर’ में कौन-सा कारक है ?",
        answers: [
            { text: "कर्म", correct: false},
            { text: "सम्बन्ध", correct: false},
            { text: "अपादान", correct: true},
            { text: "सम्बोधन", correct: false},
        ] 
    },

    {
        question:"वृक्ष से पत्ते गिरते हैं—इस वाक्य में ‘से’ किस कारक का चिह्न है ?",
        answers: [
            { text: "कर्म", correct: false},
            { text: "करण", correct: false},
            { text: "अपादान", correct: true},
            { text: "अधिकरण", correct: false},
        ] 
    },

    {
        question:"‘वह घर से बाहर गया’- इस वाक्य में कौन-सा कारक है ?",
        answers: [
            { text: "कर्त्ता", correct: false},
            { text: "कर्म", correct: false},
            { text: "करण", correct: false},
            { text: "अपादान", correct: true},
        ] 
    },

    {
        question:"टेबुल पर किताब है। यहाँ ‘पर’ किस कारक का चिह्न है ?",
        answers: [
            { text: "करण", correct: false},
            { text: "अपादान", correct: false},
            { text: "सम्प्रदान", correct: false},
            { text: "अधिकरण", correct: true},
        ] 
    },

    {
        question:"“चारपाई पर भाई साहब बैठे हैं।’ ‘इस वाक्य में ‘चारपाई’ शब्द किस कारक में है?",
        answers: [
            { text: "करण", correct: false},
            { text: "सम्प्रदान", correct: false},
            { text: "सम्बन्ध", correct: false},
            { text: "अधिकरण", correct: true},
        ] 
    },

    {
        question:"निम्नलिखित में से कौन-सा शब्द विशेषण है ?",
        answers: [
            { text: "मात्र", correct: false},
            { text: "खर्च", correct: false},
            { text: "निपट", correct: true},
            { text: "चुपचाप", correct: false},
        ] 
    },

    {
        question:"‘संस्कृति’ का विशेषण है-",
        answers: [
            { text: "संस्कृत", correct: false},
            { text: "सांस्कृति", correct: false},
            { text: "संस्कृतिक", correct: false},
            { text: "सांस्कृतिक", correct: true},
        ] 
    },

    {
        question:"जो शब्द संज्ञा की विशेषता बताता है, उसे क्या कहते हैं ?",
        answers: [
            { text: "सर्वनाम", correct: false},
            { text: "क्रिया", correct: false},
            { text: "विशेषण", correct: true},
            { text: "प्रविशेषण", correct: false},
        ] 
    },

    {
        question:" ‘मीरा ने आधा लीटर दूध पी लिया’ में विशेषण है-",
        answers: [
            { text: "गुणावाचक विशेषण", correct: false},
            { text: "संख्यावाचक विशेषण", correct: false},
            { text: "परिमाणवाचक विशेषण", correct: true},
            { text: "सार्वनामिक विशेषण", correct: false},
        ] 
    },

    {
        question:"शिव का विशेषण क्या है-",
        answers: [
            { text: "शिवेश", correct: false},
            { text: "शंकर", correct: false},
            { text: "शैव", correct: true},
            { text: "शैल", correct: false},
        ] 
    },

    {
        question:"‘परिश्रमी’ शब्द से कौन-से विशेषण का बोध होता है?",
        answers: [
            { text: "गुणवाचक विशेषण", correct: true},
            { text: "संख्यावाचक विशेषण", correct: false},
            { text: "परिमाणवाचक विशेषण", correct: false},
            { text: "सार्वनामिक विशेषण", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 