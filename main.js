function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZT1kV3-aH/model.json', modelReady());
    }

function modelReady() {
console.log(classifier.classify());
}

function classifier() {
    gotResults();
}
