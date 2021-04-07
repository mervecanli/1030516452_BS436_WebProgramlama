const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/client/Game');


test('amount of card', ()=> {
    const driver =mount(<Game/>);
    const images = driver.find('.card')
    expect(images.length).toEqual(3);
})

test('selection', () => {
    const driver = mount(<Game/>);
    const firstCard = driver.find('.card').at(0);
    firstCard.simulate('click');
    const images = driver.find('.card');
    expect(images.length).toBe(3);
})

test('newGame', () => {
    const driver = mount(<Game/>);
    for(let i=0; i<20; i++) {
        const image = driver.find('.card').at(0);
        image.simulate('click');

        let secondSelected = Math.floor(Math.random()*2);
        let srcName= image.find("images").prop("src");
        if(srcName==='images/img2.jpg'){
            image = driver.find('.card').at(secondSelected+1);
            image.simulate('click');
            image = driver.find('.card').at(secondSelected+1);
            srcName = image.find("images").prop("src")
            expect(srcName === 'images/img1.jpg' || srcName === 'images/img2.jpg').toBeTruthy();        
        }
        let restart = driver.find('.link');
        restart.simulate('click');
    }

})


