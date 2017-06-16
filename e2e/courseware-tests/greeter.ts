// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// var user = { firstName: "Jane", lastName: "User" };

// document.body.innerHTML = greeter(user);
////////

var using = require('jasmine-data-provider');
 
describe('test subtraction with data provider - direct array', function () {
    using([{a: 5, b: 2, expected: 3}, {a: 25, b: 26, expected: -1}], function (data) {
        it('should calc with operator -', function () {
            var result = data.a - data.b;
            console.log(data.a + "   --- a");
            console.log(data.b + "   --- b");
            expect(result).toEqual(data.expected);
            console.log(data.expected + "   --- e");
            console.log("Test test test test test");
            
        });
    });
});

// fdescribe('test addition with data provider - provider function', function () {
//     function plusProvider() {
//         return [
//             {a: 2, b: 3, expected: 5},
//             {a: 1, b: 15, expected: 29},
//             {a: 12, b: 13, expected: 25},
//             {a: 22, b: 13, expected: 35},
//         ];
//     }
 
//     using(plusProvider, function (data) {
//         it('should calc with operator +', function () {

//              console.log(data.a + "   --- a");
//             console.log(data.b + "   --- b");
//             var result = data.a + data.b;
 
//             expect(result).toEqual(data.expected);
//         });
//     });
// });

// describe('My fantastic test', function () {
//     var objectDataProvider = {
//         'First one is awesome!': {a: 6, b: 3, expected: 9},
//         'Second test should fail': {a: 8, b: 1, expected: 10}
//     };
 
//     using(objectDataProvider, function ( data, description) {
//         it(description, function () {
//             console.log(description);
//             var result = data.a + data.b;
 
//             expect(result).toEqual(data.expected);
//         });
//     });
// });

// describe('String examples', function(){

//     function nameProvider(){
//         return[
//             {firstname : 'Srimathi', lastName : 'Kumar', age : 10, adult : true},
//             {firstname : 'ff', lastName : 'Kumar', age : 20, adult : true},
//             {firstname : 'Nikdsfdsgsghila', lastName : 'Kumar', age : 10, adult : false}, 
//             {firstname : 'sfsfsg', lastName : 'Kumar', age : 20 , adult : false}
//         ];
//     }
//     using(nameProvider, function(data){
//         it('should output names', function(){
//             console.log(data.firstname + " " + data.lastName + "--" + data.age + "--" + data.adult);
//             expect(data.firstName).toBe('Srimathi');
//         });

//     });

// });

// describe('function object example', function(){
//     function printlabel(labelledObject : {label : string}){
//         console.log(labelledObject.label);
//     }
//     let mylabelObject = {size : 10, label : 'Size 10 object'};
//     printlabel(mylabelObject);
// });

// describe('First interface example', function(){
//     interface labelledValue{
//         label : String;
//     }

//     function printLabel(labelledObject : labelledValue ){
//         console.log(labelledObject.label);
//     }

//     let myLabel = {label : 'size 10 object using interface'};
//     printLabel(myLabel);

//     let someArray = [ 1,"String...", false];

//     for(let arr of someArray){
//         console.log(arr);
//     }

//     let list = [4, 5, 6];

//     for(let i in list){
//         console.log (" using IN " + i);
//     }
//     for(let i of list){
//         console.log (" using OF " + i);
//     }

// });



//Override example for qbank :
    // it('verifyAnswerChoiceContentItemsDisplayedInItemReviewSection', function(){
    //     login.logInWithProductCode('SHIELD');
    //     qbankHome.goToQBankHome();
    //     browser.manage().addCookie('atom.web.fakes',
    //     'GET={"/api/qbank/jasper/content/preview/286663/1":"http://qa-atom-support.kaptest.com/Atom/json/api/jasper/content/preview/NewJSONFormat/QBank_AllContentItems.json"}');
    //     browser.sleep(5000);
    //     expect(qbankHome.reviewContentItem('286663','1')).toBe(true,'Answer choice display after override');
    //     browser.sleep(5000);
        
    // });