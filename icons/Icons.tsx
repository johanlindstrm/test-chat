import { FontAwesome,Ionicons,FontAwesome5 } from "@expo/vector-icons";
import { colors } from "react-native-svg/lib/typescript/lib/extract/extractColor";
import React from "react";

export function FontIcons (props:{name: React.ComponentProps<typeof FontAwesome>['name'];color:string;size:any}){
return <FontAwesome {...props}/>
}
export function Font5Icons (props:{name:React.ComponentProps<typeof FontAwesome5>['name'];color:string,size:any}) {
    return <FontAwesome5 {...props}/>
}
export function FontIonionIcons (props:{name:React.ComponentProps<typeof Ionicons>['name'];styles:any}) {
    return   <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}
