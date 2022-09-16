function full_Sentence() {
    var part_1 = "I have";
    var part_2 = " made";
    var part_3 = " an";
    var part_4 = " exemple";
    var whole_sentence = part_1.concat (part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All works fine but still  down it's a number on it.";
    var Section = Sentence.slice(24,44);
    document.getElementById("Slice").innerHTML= Section;
}

function string_Method() {
    var X = 69;
    document.getElementById("Numbers_to_string").innerHTML= X.toString();
}