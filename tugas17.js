function kata() {
  var text1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk.";
  var text2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";
  var text3 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  console.log(text1.toLowerCase());
  console.log(text1.toUpperCase());
  console.log(text2.toLowerCase());
  console.log(text2.toUpperCase());
  console.log("==========================================");

  var i1 = text3.charCodeAt(0);
  var i2 = text3.charCodeAt(1);
  var i3 = text3.charCodeAt(2);
  var i4 = text3.charCodeAt(3);
  var i5 = text3.charCodeAt(4);
  var i6 = text3.charCodeAt(5);
  console.log(i1, "- ", i2, "- ", i3, "- ", i4, "- ", i5, "- ", i6);

  return;
}

kata();
