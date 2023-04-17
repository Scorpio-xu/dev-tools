// Json字符串美化
function beautifyJson() {
    let json_input = document.getElementById("json-input").value;
    let json_output = document.getElementById("json-output");

    // 如果输入为空，则清空输出
    if (json_input.trim() == "") {
        json_output.value = "";
        return;
    }

    try {
        let json_object = JSON.parse(json_input);
        json_output.value = JSON.stringify(json_object, null, 2);
    } catch (e) {
        json_output.value = "输入的不是合法的Json字符串";
    }
}

// Unicode编码
function encodeUnicode() {
    let unicode_input = document.getElementById("unicode-input").value;
    let unicode_output = document.getElementById("unicode-output");

    // 如果输入为空，则清空输出
    if (unicode_input.trim() == "") {
        unicode_output.value = "";
        return;
    }

    let encoded_text = "";
    for (let i = 0; i < unicode_input.length; i++) {
        encoded_text += "\\u" + unicode_input.charCodeAt(i).toString(16);
    }
    unicode_output.value = encoded_text;
}

// Unicode解码
function decodeUnicode() {
    let unicode_input = document.getElementById("unicode-input").value;
    let unicode_output = document.getElementById("unicode-output");

    // 如果输入为空，则清空输出
    if (unicode_input.trim() == "") {
        unicode_output.value = "";
        return;
    }

    let decoded_text = "";
    let regex = /\\u([\d\w]{4})/gi;
    unicode_input = unicode_input.replace(regex, function (match, group) {
        return String.fromCharCode(parseInt(group, 16));
    });
    decoded_text = unescape(unicode_input);
    unicode_output.value = decoded_text;
}

// MD5加密
function md5() {
    let md5_input = document.getElementById("md5-input").value;
    let md5_output = document.getElementById("md5-output");

    // 如果输入为空，则清空输出
    if (md5_input.trim() == "") {
        md5_output.value = "";
        return;
    }

    md5_output.value = CryptoJS.MD5(md5_input).toString();
}

// JWT解密
function decodeJWT() {
        let jwt_input = document.getElementById("jwt-input").value;
        let jwt_output = document.getElementById("jwt-output");

        // 如果输入为空，则清空输出
        if (jwt_input.trim() == "") {
                jwt_output.value = "";
                return;
        }

        // 分割输入的JWT并取出其中的payload
        let jwt_parts = jwt_input.split(".");
        if (jwt_parts.length == 3) {
                let decoded_payload = atob(jwt_parts[1]);
                decoded_payload = JSON.stringify(JSON.parse(decoded_payload), null, 2);
                jwt_output.value = decoded_payload;
        } else {
                jwt_output.value = "输入的不是合法的JWT";
        }
}

// 随机数生成
function generateRandom() {
    let random_input = document.getElementById("random-input").value;
    let random_output = document.getElementById("random-output");

    // 如果输入为空，则清空输出
    if (random_input.trim() == "") {
        random_output.value = "";
        return;
    }

    let random_number = "";
    for (let i = 0; i < random_input; i++) {
        random_number += Math.floor(Math.random() * 10);
    }
    random_output.value = random_number;
}

// UUID生成
function generateUUID() {
    let uuid_output = document.getElementById("uuid-output");
    uuid_output.value = uuidv4().replace(/-/g, '');
}

// 时间戳转换
function convertTimestamp() {
    let timestamp_input = document.getElementById("timestamp-input").value;
    let timestamp_type_input = document.getElementById("timestamp-type-input").value;
    let timestamp_output = document.getElementById("timestamp-output");

    // 如果输入为空，则清空输出
    if (timestamp_input.trim() == "") {
        timestamp_output.value = "";
        return;
    }

    let timestamp = parseInt(timestamp_input);
    if (timestamp_type_input == "ms") {
        timestamp /= 1000;
    }

    let date = new Date(timestamp * 1000);
    timestamp_output.value = date.toLocaleString();
}

// 逆向时间戳转换
function reverseTimestamp() {
    const datetimeInput = document.getElementsByName("datetime")[0];
    const timestampOutput = document.getElementById("reverse-timestamp-output");

    // 如果输入为空，则清空输出
    if (datetimeInput.value.trim() == "") {
        timestampOutput.value = "";
        return;
    }

    const timestamp = new Date(datetimeInput.value).getTime() / 1000;
    timestampOutput.value = Math.floor(timestamp);
}

// Base64 编码和解码
const base64Input = document.getElementById('base64-input');
const base64EncodeButton = document.getElementById('base64-encode');
const base64DecodeButton = document.getElementById('base64-decode');
const base64Output = document.getElementById('base64-output');

// Base64 编码
function base64Encode(str) {
    return btoa(encodeURIComponent(str));
}

// Base64 解码
function base64Decode(base64Str) {
    return decodeURIComponent(atob(base64Str));
}

// Base64 编码事件处理函数
base64EncodeButton.addEventListener('click', () => {
    const inputStr = base64Input.value;
    const encodedStr = base64Encode(inputStr);
    base64Output.value = encodedStr;
});

// Base64 解码事件处理函数
base64DecodeButton.addEventListener('click', () => {
    const base64Str = base64Input.value;
    const decodedStr = base64Decode(base64Str);
    base64Output.value = decodedStr;
});

// Base64转图片
function convertBase64ToImg() {
    let base64_img_input = document.getElementById("base64-img-input").value;
    let base64_img_output = document.getElementById("base64-img-output");

    // 如果输入为空，则清空输出
    if (base64_img_input.trim() == "") {
        base64_img_output.innerHTML = "";
        return;
    }

    let img = new Image();
    img.src = "data:image/png;base64," + base64_img_input;
    base64_img_output.innerHTML = "";
    base64_img_output.appendChild(img);
}

// 图片转Base64
function convertImgToBase64() {
    let img_input = document.getElementById("img-input");
    let img_output = document.getElementById("img-output");

    // 如果没有选择文件，则清空输出
    if (img_input.files.length == 0) {
        img_output.value = "";
        return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(img_input.files[0]);
    reader.onload = function () {
        img_output.value = reader.result.split(",")[1];
    }
}

// URL编码
function encodeURL() {
    let url_input = document.getElementById("url-input").value;
    let url_output = document.getElementById("url-output");

    // 如果输入为空，则清空输出
    if (url_input.trim() == "") {
        url_output.value = "";
        return;
    }

    url_output.value = encodeURIComponent(url_input);
}

// URL解码
function decodeURL() {
    let url_input = document.getElementById("url-input").value;
    let url_output = document.getElementById("url-output");

    // 如果输入为空，则清空输出
    if (url_input.trim() == "") {
        url_output.value = "";
        return;
    }

    url_output.value = decodeURIComponent(url_input);
}

// UUID生成函数
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 一键复制
function copyText(event) {
    let target = event.target;
    if (target.tagName !== "TEXTAREA" && target.tagName !== "INPUT" || target.value.trim() == "") {
        return;
    }
    target.select();
    document.execCommand("copy");
    let copied = document.createElement("span");
    copied.className = "copied";
    copied.textContent = "已复制";
    target.parentNode.insertBefore(copied, target.nextSibling);
    setTimeout(function () {
        copied.parentNode.removeChild(copied);
    }, 1000);
}

// 绑定复制事件
let output_containers = document.querySelectorAll("main > section.tool > textarea.output, main > section.tool > input[type='text'].output");
for (let i = 0; i < output_containers.length; i++) {
    output_containers[i].addEventListener("mousedown", copyText);
}
