const CONTAINER_ID = 'test';
const FORM_HTML = `<form action="" method="post" id="form-opros">
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
        </div>
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-2" id="" value="m"><input type="radio" name="sex-radio-2" id="" value="f"></div>
        </div>
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-3" id="" value="m"><input type="radio" name="sex-radio-3" id="" value="f"></div>
        </div>
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-4" id="" value="m"><input type="radio" name="sex-radio-4" id="" value="f"></div>
        </div>
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-5" id="" value="m"><input type="radio" name="sex-radio-5" id="" value="f"></div>
        </div>
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-6" id="" value="m"><input type="radio" name="sex-radio-6" id="" value="f"></div>
        </div>
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-7" id="" value="m"><input type="radio" name="sex-radio-7" id="" value="f"></div>
        </div>
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-8" id="" value="m"><input type="radio" name="sex-radio-8" id="" value="f"></div>
        </div>
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-9" id="" value="m"><input type="radio" name="sex-radio-9" id="" value="f"></div>
        </div>
        <div name="name-container">
            <input type="text" name="" id="">
            <div class="radio-container"><input type="radio" name="sex-radio-10" id="" value="m"><input type="radio" name="sex-radio-10" id="" value="f"></div>
        </div>
        <button type="submit">Submit!</button>
    </form>`;
    const NOT_VALID_CSS_CLASS = 'form__input--notvalid';

function initform(evt) {
    const containerElement = document.getElementById(CONTAINER_ID);
    containerElement.insertAdjacentHTML('afterbegin', FORM_HTML);
    const formElement = containerElement.firstChild;
    formElement.addEventListener('submit', onSubmitForm);
}

function onSubmitForm(evt) {
    evt.preventDefault();
    let isPrepared = true;
    const lstFields = evt.currentTarget.getElementsByClassName('radio-container');
    lstFields.forEach((field) => {
        let lstInputs = field.getElementsByTagName('input');
        for (let i = 0; i < lstInputs.length; i++) {
            const input = lstInputs[i];
            let isValid = false;
            if (input.getAttribute('type') === 'radio') {
                isValid = input.checked;
            }
            if (!isValid) {
                if (filed.classList.contain(NOT_VALID_CSS_CLASS)) {
                    field.classList.add(NOT_VALID_CSS_CLASS);
                }
            }
            isPrepared = isPrepared && isValid;
        }
    });
    if (isPrepared) {
        evt.currentTarget.submit();
    }  
}

document.addEventListener('DOMContentLoaded', initform);