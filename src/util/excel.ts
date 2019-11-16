import xlsx from 'xlsx'

// 导入
export function importExcelFile(file) {
    return new Promise((resolve, reject) => {
        function handleOnLoad(event) {
            try {
                const {result} = event.target;
                const workbook = xlsx.read(result, {type: 'binary'});
                const sheetsData = [];
                for (const sheet of Object.entries(workbook.Sheets)) {
                    sheetsData.push({
                        name: sheet[0],
                        data: xlsx.utils.sheet_to_json(sheet[1])
                    })
                }
                resolve(sheetsData)
            } catch (error) {
                reject(error)
            }
        }

        const fileReader = new FileReader();
        fileReader.onload = handleOnLoad;
        fileReader.readAsBinaryString(file);
    })
}

// 导出
