var searchIndex = JSON.parse('{\
"cli_table":{"doc":"Rust crate for printing tables on command line.","i":[[3,"Cell","cli_table","A `Cell` in a `Table`",null,null],[3,"Row","","A `Row` in a `Table`",null,null],[3,"Table","","Struct for building a `Table` on command line",null,null],[4,"Error","","Errors returned by functions in this crate",null,null],[13,"MismatchedColumns","","Returned when there is a mismatch in number of columns in…",0,null],[11,"new","","Creates a new `Cell`",1,[[["cellformat",3]]]],[11,"new","","Creates a new `Row`",2,[[["cell",3],["vec",3]]]],[11,"new","","Creates a new `Table`",3,[[["vec",3],["tableformat",3],["row",3]],[["result",4],["error",4],["table",3]]]],[11,"print_stdout","","Prints current `Table` to `stdout`",3,[[],["result",6]]],[11,"print_stderr","","Prints current `Table` to `stderr`",3,[[],["result",6]]],[0,"format","","Utilities for formatting of a `Table`",null,null],[4,"Color","cli_table::format","The set of available colors for the terminal…",null,null],[13,"Black","","",4,null],[13,"Blue","","",4,null],[13,"Green","","",4,null],[13,"Red","","",4,null],[13,"Cyan","","",4,null],[13,"Magenta","","",4,null],[13,"Yellow","","",4,null],[13,"White","","",4,null],[13,"Ansi256","","",4,null],[13,"Rgb","","",4,null],[3,"CellFormat","","Struct for configuring a `Cell`\'s format",null,null],[3,"CellFormatBuilder","","Builder for `CellFormat`",null,null],[3,"Padding","","Used to add padding to the contents of a `Cell`",null,null],[3,"PaddingBuilder","","Builder for `Padding`",null,null],[3,"Border","","Borders of a `Table`",null,null],[3,"BorderBuilder","","Builder for `Border`",null,null],[3,"HorizontalLine","","A horizontal line in a `Table` (border or row separator)",null,null],[3,"Separator","","Inner (column/row) separators of a `Table`",null,null],[3,"SeparatorBuilder","","Builder for `Separator`",null,null],[3,"TableFormat","","Struct for configuring a `Table`\'s format",null,null],[3,"VerticalLine","","A vertical line in a `Table` (border or column separator)",null,null],[4,"Align","","Used to vertically align contents of a `Cell`",null,null],[13,"Top","","Aligns contents to top",5,null],[13,"Bottom","","Aligns contents to bottom",5,null],[13,"Center","","Aligns contents to center",5,null],[4,"Justify","","Used to horizontally justify contents of a `Cell`",null,null],[13,"Left","","Justifies contents to left",6,null],[13,"Right","","Justifies contents to right",6,null],[13,"Center","","Justifies contents to center",6,null],[11,"builder","","Creates a new builder for `CellFormat`",7,[[],["cellformatbuilder",3]]],[11,"justify","","Justify contents of a `Cell`",8,[[["justify",4]]]],[11,"align","","Align contents of a `Cell`",8,[[["align",4]]]],[11,"padding","","Sets padding of a `Cell`",8,[[["padding",3]]]],[11,"foreground_color","","Set foreground color of a `Cell`",8,[[["option",4],["color",4]]]],[11,"background_color","","Set background color of a `Cell`",8,[[["option",4],["color",4]]]],[11,"bold","","Set contents of `Cell` to be bold",8,[[]]],[11,"underline","","Set contents of `Cell` to be underlined",8,[[]]],[11,"build","","Build `CellFormat`",8,[[],["cellformat",3]]],[11,"builder","","Creates a new builder for `Padding`",9,[[],["paddingbuilder",3]]],[11,"left","","Sets left padding of a `Cell`",10,[[]]],[11,"right","","Sets right padding of a `Cell`",10,[[]]],[11,"top","","Sets top padding of a `Cell`",10,[[]]],[11,"bottom","","Sets bottom padding of a `Cell`",10,[[]]],[11,"build","","Build `Padding`",10,[[],["padding",3]]],[11,"new","","Creates a new instance of `VerticalLine`",11,[[]]],[11,"new","","Creates a new instance of `HorizontalLine`",12,[[]]],[11,"builder","","Creates a new builder for `Border`",13,[[],["borderbuilder",3]]],[11,"top","","Set top border of a `Table`",14,[[["horizontalline",3]]]],[11,"bottom","","Set bottom border of a `Table`",14,[[["horizontalline",3]]]],[11,"left","","Set left border of a `Table`",14,[[["verticalline",3]]]],[11,"right","","Set right border of a `Table`",14,[[["verticalline",3]]]],[11,"build","","Build `Border`",14,[[],["border",3]]],[11,"builder","","Creates a new builder for `Separator`",15,[[],["separatorbuilder",3]]],[11,"column","","Set column separators of a `Table`",16,[[["verticalline",3],["option",4]]]],[11,"row","","Set column separators of a `Table`",16,[[["option",4],["horizontalline",3]]]],[11,"title","","Set title title of a `Table`",16,[[["option",4],["horizontalline",3]]]],[11,"build","","Build `Separator`",16,[[],["separator",3]]],[11,"new","","Creates a new instance of `TableFormat`",17,[[["border",3],["separator",3]]]],[11,"foreground","","Set the foreground color of the table borders & separators.",17,[[["color",4]]]],[17,"BORDER_COLUMN_ROW","","Format with borders, column separators and row separators…",null,null],[17,"BORDER_COLUMN_TITLE","","Format with borders, column separators and title separator…",null,null],[17,"BORDER_COLUMN_NO_ROW","","Format with borders and column separators (without row…",null,null],[17,"NO_BORDER_COLUMN_TITLE","","Format with no borders, column separators and title…",null,null],[17,"NO_BORDER_COLUMN_ROW","","Format with no borders, column separators and row separators",null,null],[17,"BORDER_NO_COLUMN_ROW","","Format with borders and row separators (without column…",null,null],[11,"from","cli_table","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","cli_table::format","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"clone","","",4,[[],["color",4]]],[11,"from_str","","",4,[[],[["color",4],["result",4],["parsecolorerror",3]]]],[11,"eq","","",4,[[["color",4]]]],[11,"ne","","",4,[[["color",4]]]],[11,"fmt","","",4,[[["formatter",3]],[["result",4],["error",3]]]],[11,"clone","","",7,[[],["cellformat",3]]],[11,"clone","","",6,[[],["justify",4]]],[11,"clone","","",5,[[],["align",4]]],[11,"clone","","",9,[[],["padding",3]]],[11,"clone","","",11,[[],["verticalline",3]]],[11,"clone","","",12,[[],["horizontalline",3]]],[11,"clone","","",13,[[],["border",3]]],[11,"clone","","",14,[[],["borderbuilder",3]]],[11,"clone","","",15,[[],["separator",3]]],[11,"default","","",7,[[],["cellformat",3]]],[11,"default","","",8,[[],["cellformatbuilder",3]]],[11,"default","","",6,[[]]],[11,"default","","",5,[[]]],[11,"default","","",9,[[],["padding",3]]],[11,"default","","",10,[[],["paddingbuilder",3]]],[11,"default","","",11,[[]]],[11,"default","","",12,[[]]],[11,"default","","",13,[[]]],[11,"default","","",15,[[]]],[11,"default","","",17,[[],["tableformat",3]]],[11,"eq","","",11,[[["verticalline",3]]]],[11,"ne","","",11,[[["verticalline",3]]]],[11,"eq","","",12,[[["horizontalline",3]]]],[11,"ne","","",12,[[["horizontalline",3]]]],[11,"eq","","",13,[[["border",3]]]],[11,"ne","","",13,[[["border",3]]]],[11,"eq","","",14,[[["borderbuilder",3]]]],[11,"ne","","",14,[[["borderbuilder",3]]]],[11,"eq","","",15,[[["separator",3]]]],[11,"ne","","",15,[[["separator",3]]]],[11,"fmt","cli_table","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","cli_table::format","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","cli_table","",0,[[["formatter",3]],["result",6]]]],"p":[[4,"Error"],[3,"Cell"],[3,"Row"],[3,"Table"],[4,"Color"],[4,"Align"],[4,"Justify"],[3,"CellFormat"],[3,"CellFormatBuilder"],[3,"Padding"],[3,"PaddingBuilder"],[3,"VerticalLine"],[3,"HorizontalLine"],[3,"Border"],[3,"BorderBuilder"],[3,"Separator"],[3,"SeparatorBuilder"],[3,"TableFormat"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);