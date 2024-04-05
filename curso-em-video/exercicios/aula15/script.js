let num = [5, 8, 4]
num[3] = 6
num.push(7)


t = num.indexOf(7)
if(t == -1){
    console.log('o valor não foi encontrado!')
} else {
    console.log(t)
}
