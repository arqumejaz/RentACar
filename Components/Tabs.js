import Toyota from "./Components/Toyota";
import Honda from "./Components/Honda";
import Lexus from "./Components/Lexus";
import BMW from "./Components/BMW";

function TabNav(){
    return(
    
        <Tab.Navigator >
        <Tab.Screen name="toyota" component={Toyota} />
        <Tab.Screen name="honda" component={Honda} />
        <Tab.Screen name="lexus" component={Lexus} />
        <Tab.Screen name="bmw" component={BMW} />
      </Tab.Navigator>
    )
}
export default TabNav;