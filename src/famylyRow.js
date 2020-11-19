export default function FamylyRow({ family, members }) {

    function getMemberElemnts() {
        return members.map( ({title, name}) => {
            return (
                <span>
                    <b> {title}: </b>
                    {name}<br/>
                </span>
            )
        })
    }

    return (<>
        <td>
            <span>
                {family.name} Family
            </span>
        </td>
        <td>
            {getMemberElemnts()}
        </td>
    </>)
}
