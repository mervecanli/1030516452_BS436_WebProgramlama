const React = require('react');
const {mount} = require('enzyme');
const {Game} = require("../src/Game");

const checkGameIsDisplayed = (driver) => {
    const images = driver.find('.kart');
    expect(images.length).toEqual(3);
}

test('oyun olusturuldu', () => {
    const driver = mount(<Game/>);
    checkGameIsDisplayed(driver); 

});

test('cevap ver', () => {
    const driver = mount(<Game/>);
    let msg = undefined;
    global.alert = (s) => {msg = s};
    const first = driver.find('.kart').at(1);
    first.simulate('click');
    checkGameIsDisplayed(driver);
    expect(msg).toBeDefined();

})

test('coklu image', () => {
    let driver = mount(<Game/>);
    let msg = undefined;
    global.alert = (s) => {msg=s};
    for(let i=0; i<50; i++) {
        const first = driver.find('.kart').at(2);
        first.simulate('click');
        checkGameIsDisplayed(driver);
        expect(msg).toBeDefined();
        msg = undefined;
        driver = mount(<Game/>)
    }
})