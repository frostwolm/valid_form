

class FormValid{
    options = {};
    CONTAINER_ID = '';

    constructor(containerId, options){
        if (containerId === undefined) {
            console.error(`Form valid: set container id`);
        }
        
        this.setDefaultOptions(options);

        this.CONTAINER_ID = containerId;
        document.addEventListener('DOMContentLoaded', this.initform.bind(this));
    }

    setDefaultOptions(options){
        options = options || {};
        this.options.URL = options.URL || 'https://echo.htmlacademy.ru/';
        this.options.NOT_VALID_CSS_CLASS = options.NOT_VALID_CSS_CLASS || 'form__input--notvalid';
        this.options.FORM_HTML = options.FORM_HTML || `<form action="${this.options.URL}" method="post" id="form-opros">
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-1" id="" value="m"><input type="radio" name="sex-radio-1" id="" value="f"></div>
                                </div>
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-2" id="" value="m"><input type="radio" name="sex-radio-2" id="" value="f"></div>
                                </div>
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-3" id="" value="m"><input type="radio" name="sex-radio-3" id="" value="f"></div>
                                </div>
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-4" id="" value="m"><input type="radio" name="sex-radio-4" id="" value="f"></div>
                                </div>
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-5" id="" value="m"><input type="radio" name="sex-radio-5" id="" value="f"></div>
                                </div>
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-6" id="" value="m"><input type="radio" name="sex-radio-6" id="" value="f"></div>
                                </div>
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-7" id="" value="m"><input type="radio" name="sex-radio-7" id="" value="f"></div>
                                </div>
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-8" id="" value="m"><input type="radio" name="sex-radio-8" id="" value="f"></div>
                                </div>
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-9" id="" value="m"><input type="radio" name="sex-radio-9" id="" value="f"></div>
                                </div>
                                <div name="name-container" class="name-container">
                                    <input type="text" name="name" id="">
                                    <div class="radio-container"><input type="radio" name="sex-radio-10" id="" value="m"><input type="radio" name="sex-radio-10" id="" value="f"></div>
                                </div>
                                <button type="submit">Submit!</button>
                            </form>`;
    }

    initform(evt) {
        const containerElement = document.getElementById(this.CONTAINER_ID);
        containerElement.insertAdjacentHTML('afterbegin', this.options.FORM_HTML);
        const formElement = containerElement.firstChild;
        formElement.addEventListener('submit', this.onSubmitForm.bind(this));
    }

    onSubmitForm(evt) {
        evt.preventDefault();
        let isFormValid = true;
        const lstFields = evt.currentTarget.getElementsByClassName('name-container');
        for (let j = 0; j < lstFields.length; j++) {
            const field = lstFields[j];
            let lstInputs = field.getElementsByTagName('input');
            let isRadioChecked = false;
            let isHasTextValue = false;
            let isInputValid = true;
            for (let i = 0; i < lstInputs.length; i++) {
                const input = lstInputs[i];
                
                if (input.getAttribute('type') === 'text') {
                    isHasTextValue = input.value.trim() !== '';
                }

                if (input.getAttribute('type') === 'radio') {
                    isRadioChecked = isRadioChecked || input.checked;
                }
            }

            if (isHasTextValue) {
                isInputValid = isRadioChecked;    
            }else{
                isInputValid = true;
            }
            
            isFormValid = isFormValid && isInputValid;
            
            if (isInputValid) {
                if (field.classList.contains(this.options.NOT_VALID_CSS_CLASS)) {
                    field.classList.remove(this.options.NOT_VALID_CSS_CLASS);
                }
            }else{
                if (!field.classList.contains(this.options.NOT_VALID_CSS_CLASS)) {
                    field.classList.add(this.options.NOT_VALID_CSS_CLASS);
                }  
            }
        }

        if (isFormValid) {
            evt.currentTarget.submit();
        }  
    }
}

const formValid = new FormValid('test');