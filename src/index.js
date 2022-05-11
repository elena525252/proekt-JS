import calculatorCounter from './modules/calculatorCounter'
import formSender from './modules/formSender'
import modal from './modules/modal'
import sliderFirst from './modules/sliderFirst'
import sliderSecond from './modules/sliderSecond'
import timer from './modules/timer'
import toTop from './modules/toTop'
import imageZoom from './modules/imageZoom'



sliderFirst()
sliderSecond()
modal()
toTop()
timer('29 may 2022')
calculatorCounter()
imageZoom()


const forms = document.querySelectorAll('form')
forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.id = `form${index}`
        
        formSender({
            formId: `form${index}`,
            someElem: [
                {
                    type: 'block',
                    id: 'calc-total'
                }
            ] 
        })
    })
})