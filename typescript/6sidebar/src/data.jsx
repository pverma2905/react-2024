import Dashboard from "./screens/dashboard";
import Contact from "./screens/contact";
import Subscription from "./screens/subscription";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

export default function(){
    const data = [
        {
            id:0,
            label:"Dashboard",
            icons:<DashboardIcon/>,
            component:<Dashboard/>,
            path:"/dashboard"
        },
        {
            id:1,
            label:"Contact",
            icons:<ContactPageIcon/>,
            component:<Contact/>,
            path:"/contact"
        },
        {
            id:2,
            label:"Subscription",
            icons:<SubscriptionsIcon/>,
            component:<Subscription/>,
            path:"/subscription"
        }
    ];

    return data;
}



// export default data