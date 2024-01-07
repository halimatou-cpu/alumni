import {useEffect, useState} from 'react';
import {useDynamicContext} from "@dynamic-labs/sdk-react-core";
import {User} from "@/objets/user";

export default function useDynamicUser() {
    const { user } = useDynamicContext();

    const [userInfo, setUserInfo] = useState<User | undefined>();

    useEffect(() => {
        if (user) {
            setUserInfo({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            });
        }
    }, [user]);

    return userInfo;
};


