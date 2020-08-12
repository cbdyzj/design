import xlsx from 'xlsx'

/**
 * 导入
 */
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

function saveBlobAsFile(blobObject, fileName) {
    const tempAnchor = document.createElement('a')
    tempAnchor.download = fileName || 'export-file'
    tempAnchor.href = URL.createObjectURL(blobObject)
    tempAnchor.click()
    setTimeout(() => URL.revokeObjectURL(blobObject), 100);
}

function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i != s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF
    }
    return buf;
}

/**
 * 导出
 */
export function exportExcelFile(sheetsData, filename = new Date().getTime() + '.xlsx') {
    const wb = xlsx.utils.book_new()
    for (const sheet of sheetsData) {
        const ws = xlsx.utils.aoa_to_sheet(sheet.data)
        xlsx.utils.book_append_sheet(wb, ws, sheet.name)
    }
    const blobObject = new Blob([s2ab(xlsx.write(wb,
        {bookType: 'xlsx', bookSST: false, type: 'binary'}
    ))], {type: ''});
    saveBlobAsFile(blobObject, filename)
}
