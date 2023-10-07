import { Child1 } from './Child1.jsx';
import { Child2 } from './Child2';
import { UserProvider } from './contexts/UserProvider';

export const Parent = () => {
    return (
        <UserProvider>
            <h1>Parent App</h1>
            <hr />
            <Child1 />
            <Child2 />
        </UserProvider>
    )
}