const newFunctions = ['newForEach', 'newMap', 'newSome', 'newFind', 'newFindIndex', 'newEvery', 'newFilter', 'newConcat', 'newIncludes', 'newIndexOf', 'newJoin', 'newSlice', 'newFlat', 'newFlatMap', 'newArrayOf']


function show(event){
    const container = event.target.parentElement.children
    const arr = container[1].value
    const func = container[2].value
    const showResult = container[6]
    const newFunc = container[0].value
    if (arr !== '' && func !== ''){
        showResult.innerText = JSON.stringify(eval(`${arr}.${newFunc}(${func})`))
    } else if (newFunc === 'newArrayOf'){
        showResult.innerText = JSON.stringify(eval(`Array.${newFunc}(${arr})`))
    }
}


function makeTest(){
    for (let func of newFunctions){
        let funcContainer = document.createElement('div')
        funcContainer.id = "functionContainer"
        let title = document.createElement('h2')
        title.innerHTML = func
        title.value = func
        funcContainer.appendChild(title)
        let inputArr = document.createElement('input')
        inputArr.type = "text"
        inputArr.id = "arr"
        inputArr.placeholder = "Array -> [ 1, 2, 3]"
        funcContainer.appendChild(inputArr)
        let inputFunc = document.createElement('input')
        inputFunc.type = "text"
        inputFunc.id = "func"
        inputFunc.placeholder = "Function()"
        funcContainer.appendChild(inputFunc)
        let submitBtn = document.createElement('input')
        submitBtn.type = "submit"
        submitBtn.value = "RESULT"
        submitBtn.id = "submit"
        funcContainer.appendChild(submitBtn)
        let space1 = document.createElement('br')
        let space2 = document.createElement('br')
        funcContainer.appendChild(space1)
        funcContainer.appendChild(space2)
        let resultArea = document.createElement('textarea')
        resultArea.id = "results"
        resultArea.rows = "2"
        resultArea.cols = "60"
        funcContainer.appendChild(resultArea)
        const mainContainer = document.getElementById('mainContainer')
        mainContainer.appendChild(funcContainer)

        submitBtn.addEventListener("click", show)
    }
}

makeTest()