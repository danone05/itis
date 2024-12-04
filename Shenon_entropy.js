function Shanon_ent(text)
{
    let Pi_value = ""
    let value = ""
    let collect_value = ""
    let count_value = 0
    let H_x = 0
    let arrange_Pi = []

    for (let i = 0; i < text.length; ++ i)
    {
        if ( !(collect_value.includes(text[i]) ) )
        {
            collect_value += text[i]
            value = text[i]
            count_value = text.split(value).length - 1
            Pi_value = count_value / text.length
            arrange_Pi.push(Pi_value)
        }
    }
    console.log(collect_value)

    for (let j = 0; j < collect_value.length; ++j ){

        H_x += arrange_Pi[j] * Math.log2(arrange_Pi[j]) * (-1)
    }

return H_x

}
const fs= require("fs")

let array = fs.readFileSync('./cwfile').toString().split("\n")
console.log(array)

let text = ''
for (let j in array){text += array[j]}

console.log(Shanon_ent(text))