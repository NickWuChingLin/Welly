// 1JavaScript: 字串反轉

function reverseString(str) {
    // 實作你的解答	
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

console.log(reverseString("Hello")); // 預期輸出: "olleH”
// 2. JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。

// 範例：

function filterNumbersGreaterThanFive(numbers) {
    // 實作你的解答
    let newArr = numbers.filter((item) => {
        return item > 5
    })
    return newArr
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]
// 3. JavaScript: 重構
// 問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
    let formattedName = '';

    if (firstName) {
        formattedName += firstName;
        if (lastName) {
            formattedName += ' ' + lastName;
        }
    }
    return formattedName;
}

console.log(formatName('王', '大白'))

// 因為這是判斷使用者姓名用的，先判斷firstname是否為空值，如果不為空再進行判斷lastname是不是空值，因此兩個不為空值的情況下，這個function才會正確給予姓名


// 4. React: 條件渲染
// 問題：在React中，如何根據條件渲染兩種不同的內容？

// 範例：

function ConditionalRendering({ isLoggedIn }) {
    // 實作你的條件渲染
}
// 5. React: 組件
// 問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。

