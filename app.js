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

function initform(evt) {
    const containerElement = document.getElementById(CONTAINER_ID);
    containerElement.insertAdjacentHTML('afterbegin', FORM_HTML);
}

document.addEventListener('DOMContentLoaded', initform);