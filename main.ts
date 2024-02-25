let personName: string = '';

personName = prompt ("What is your name ") || '';

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Would Like To Learn Some Python Today?`)
}

else {
    alert('You have to fill your name')
}