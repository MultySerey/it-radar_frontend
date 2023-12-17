export default () => {
    const useCourseInfo = () => useState('courseInfo')

    const setInfo = (newInfo) => {
        const accessInfo = useCourseInfo();
        accessInfo.value = newInfo;
    }
    
    return { useCourseInfo };
}