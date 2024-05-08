const {RetriveFroms} = require('../../services/apis')
export const copyToClipboard = async (data) => {

     let text = `FormBuilder : Fill the Form     \nTile : ${data.title}  \n${RetriveFroms.VIEW_ALL_FORMS+"/"+data._id}`;
    
        await navigator.clipboard.writeText(text)
            .then(() => {
               return true;

            })
            .catch(err => {
                return false;
            });
    
}