const learning = ['JS', 'OOP', 'DOM'];

const whatAreWeLearning = () => {
    console.log('We are learnign about');
    learning.forEach(subject => console.log(subject))
};

module.exports = whatAreWeLearning;