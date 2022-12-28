import { reactive } from "vue";

const data = reactive({
    message: '',
    active: false
});

let timeout;
const useNotification = () => {
    const setNotification = (newMessage) => {
        data.message = newMessage;
        data.active = true;

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            toggleNotification();
        }, 5000);
    };
    
    const toggleNotification = () => {
        clearTimeout(timeout);
        data.active = !data.active;
    };

    return {
        notification: data,
        setNotification,
        toggleNotification
    };
}

export default useNotification;