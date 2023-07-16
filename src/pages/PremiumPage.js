import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import '../styles/PremiumPage.css';
import Sidebar from '../Components/Sidebar';

const PremiumPage = () => {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                window.location.replace('https://main.d1kneqplofgg35.amplifyapp.com/home')

            )}
        </Authenticator>
        
    );
};



export default PremiumPage;