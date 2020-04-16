export default function(d) {
    // взима документа спретва data-a и ще му вземе и id-то
    return {...d.data(), id: d.id }
}