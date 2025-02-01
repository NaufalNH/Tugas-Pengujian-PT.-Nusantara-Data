import Wrapper from "@/components/auth/authWrapper";
import MainView from "@/components/pages/dashboard/main";

const Main = () => {
    return (
        <Wrapper needLogin={true} requiredRoles={1}>
            <MainView />
        </Wrapper>
    );
}


 

export default Main