var searchIndex = JSON.parse('{\
"cli_table":{"doc":"Rust crate for printing tables on command line.","i":[[4,"Color","cli_table","The set of available colors for the terminal…",null,null],[13,"Black","","",0,null],[13,"Blue","","",0,null],[13,"Green","","",0,null],[13,"Red","","",0,null],[13,"Cyan","","",0,null],[13,"Magenta","","",0,null],[13,"Yellow","","",0,null],[13,"White","","",0,null],[13,"Ansi256","","",0,null],[13,"Rgb","","",0,null],[4,"ColorChoice","","ColorChoice represents the color preferences of an end user.",null,null],[13,"Always","","Try very hard to emit colors. This includes emitting ANSI…",1,null],[13,"AlwaysAnsi","","AlwaysAnsi is like Always, except it never tries to use…",1,null],[13,"Auto","","Try to use colors, but don\'t force the issue. If the…",1,null],[13,"Never","","Never emit colors.",1,null],[3,"CellStruct","","Concrete cell of a table",null,null],[3,"RowStruct","","Concrete row of a table",null,null],[3,"TableStruct","","Struct for building a table on command line",null,null],[5,"print_stdout","","Prints a table to `stdout`",null,[[["table",8]],["result",6]]],[5,"print_stderr","","Prints a table to `stderr`",null,[[["table",8]],["result",6]]],[11,"justify","","Used to horizontally justify contents of a cell",2,[[["justify",4]],["cellstruct",3]]],[11,"align","","Used to vertically align the contents of a cell",2,[[["align",4]],["cellstruct",3]]],[11,"padding","","Used to add padding to the contents of a cell",2,[[["padding",3]],["cellstruct",3]]],[11,"border","","Used to set border of a table",3,[[["border",3]]]],[11,"separator","","Used to set column/row separators of a table",3,[[["separator",3]]]],[11,"color_choice","","Used to set the color preferences for printing the table",3,[[["colorchoice",4]]]],[0,"format","","Utilities for formatting of a table",null,null],[3,"Padding","cli_table::format","Used to add padding to the contents of a cell",null,null],[3,"PaddingBuilder","","Builder for padding",null,null],[3,"Border","","Borders of a table",null,null],[3,"BorderBuilder","","Builder for border",null,null],[3,"HorizontalLine","","A horizontal line in a table (border or row separator)",null,null],[3,"Separator","","Inner (column/row) separators of a table",null,null],[3,"SeparatorBuilder","","Builder for separator",null,null],[3,"VerticalLine","","A vertical line in a table (border or column separator)",null,null],[4,"Align","","Used to vertically align contents of a cell",null,null],[13,"Top","","Aligns contents to top",4,null],[13,"Bottom","","Aligns contents to bottom",4,null],[13,"Center","","Aligns contents to center",4,null],[4,"Justify","","Used to horizontally justify contents of a cell",null,null],[13,"Left","","Justifies contents to left",5,null],[13,"Right","","Justifies contents to right",5,null],[13,"Center","","Justifies contents to center",5,null],[8,"Cell","cli_table","Trait to convert raw types into cells",null,null],[10,"cell","","Converts raw type to cell of a table",6,[[],["cellstruct",3]]],[8,"Row","","Trait to convert raw types into rows",null,null],[10,"row","","Converts raw type to rows of a table",7,[[],["rowstruct",3]]],[8,"Style","","Trait for modifying style of table and cells",null,null],[10,"foreground_color","","Used to set foreground color",8,[[["color",4],["option",4]]]],[10,"background_color","","Used to set background color",8,[[["color",4],["option",4]]]],[10,"bold","","Used to set contents to be bold",8,[[]]],[10,"underline","","Used to set contents to be underlined",8,[[]]],[10,"italic","","Used to set contents to be italic",8,[[]]],[10,"intense","","Used to set high intensity version of a color specified",8,[[]]],[10,"dimmed","","Used to set contents to be dimmed",8,[[]]],[8,"Table","","Trait to convert raw type into table",null,null],[10,"table","","Converts raw type to a table",9,[[],["tablestruct",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","cli_table::format","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"clone","cli_table","",1,[[],["colorchoice",4]]],[11,"clone","","",0,[[],["color",4]]],[11,"eq","","",1,[[["colorchoice",4]]]],[11,"eq","","",0,[[["color",4]]]],[11,"ne","","",0,[[["color",4]]]],[11,"from_str","","",0,[[],[["result",4],["color",4],["parsecolorerror",3]]]],[11,"fmt","","",1,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","","",0,[[["formatter",3]],[["result",4],["error",3]]]],[11,"foreground_color","","",2,[[["color",4],["option",4]]]],[11,"background_color","","",2,[[["color",4],["option",4]]]],[11,"bold","","",2,[[]]],[11,"underline","","",2,[[]]],[11,"italic","","",2,[[]]],[11,"intense","","",2,[[]]],[11,"dimmed","","",2,[[]]],[11,"foreground_color","","",3,[[["color",4],["option",4]]]],[11,"background_color","","",3,[[["color",4],["option",4]]]],[11,"bold","","",3,[[]]],[11,"underline","","",3,[[]]],[11,"italic","","",3,[[]]],[11,"intense","","",3,[[]]],[11,"dimmed","","",3,[[]]],[11,"from","","",2,[[]]],[11,"from","","",10,[[]]],[11,"from","","",3,[[]]],[11,"clone","cli_table::format","",5,[[],["justify",4]]],[11,"clone","","",4,[[],["align",4]]],[11,"clone","","",11,[[],["padding",3]]],[11,"clone","","",13,[[],["verticalline",3]]],[11,"clone","","",14,[[],["horizontalline",3]]],[11,"clone","","",15,[[],["border",3]]],[11,"clone","","",16,[[],["borderbuilder",3]]],[11,"clone","","",17,[[],["separator",3]]],[11,"default","","",5,[[]]],[11,"default","","",4,[[]]],[11,"default","","",11,[[],["padding",3]]],[11,"default","","",12,[[],["paddingbuilder",3]]],[11,"default","","",13,[[]]],[11,"default","","",14,[[]]],[11,"default","","",15,[[]]],[11,"default","","",17,[[]]],[11,"eq","","",13,[[["verticalline",3]]]],[11,"ne","","",13,[[["verticalline",3]]]],[11,"eq","","",14,[[["horizontalline",3]]]],[11,"ne","","",14,[[["horizontalline",3]]]],[11,"eq","","",15,[[["border",3]]]],[11,"ne","","",15,[[["border",3]]]],[11,"eq","","",16,[[["borderbuilder",3]]]],[11,"ne","","",16,[[["borderbuilder",3]]]],[11,"eq","","",17,[[["separator",3]]]],[11,"ne","","",17,[[["separator",3]]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"builder","","Creates a new builder for padding",11,[[],["paddingbuilder",3]]],[11,"left","","Sets left padding of a cell",12,[[]]],[11,"right","","Sets right padding of a cell",12,[[]]],[11,"top","","Sets top padding of a cell",12,[[]]],[11,"bottom","","Sets bottom padding of a cell",12,[[]]],[11,"build","","Build padding",12,[[],["padding",3]]],[11,"new","","Creates a new instance of vertical line",13,[[]]],[11,"new","","Creates a new instance of horizontal line",14,[[]]],[11,"builder","","Creates a new builder for border",15,[[],["borderbuilder",3]]],[11,"top","","Set top border of a table",16,[[["horizontalline",3]]]],[11,"bottom","","Set bottom border of a table",16,[[["horizontalline",3]]]],[11,"left","","Set left border of a table",16,[[["verticalline",3]]]],[11,"right","","Set right border of a table",16,[[["verticalline",3]]]],[11,"build","","Build border",16,[[],["border",3]]],[11,"builder","","Creates a new builder for separator",17,[[],["separatorbuilder",3]]],[11,"column","","Set column separators of a table",18,[[["option",4],["verticalline",3]]]],[11,"row","","Set column separators of a table",18,[[["horizontalline",3],["option",4]]]],[11,"title","","Set title of a table",18,[[["horizontalline",3],["option",4]]]],[11,"build","","Build separator",18,[[],["separator",3]]]],"p":[[4,"Color"],[4,"ColorChoice"],[3,"CellStruct"],[3,"TableStruct"],[4,"Align"],[4,"Justify"],[8,"Cell"],[8,"Row"],[8,"Style"],[8,"Table"],[3,"RowStruct"],[3,"Padding"],[3,"PaddingBuilder"],[3,"VerticalLine"],[3,"HorizontalLine"],[3,"Border"],[3,"BorderBuilder"],[3,"Separator"],[3,"SeparatorBuilder"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);