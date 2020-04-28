export default function(d) {
    // take the document spread the data and take the id
    return {...d.data(), id: d.id }
}