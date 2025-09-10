async function fetchTalentsData() {
    try {
        const response = await fetch('https://git.fahrul.id/koda/data/raw/branch/main/talents.json')
        
        if (!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`)
        }
        
        const data = await response.json()
    
        const talentNames = data.map(talent => talent.name + ' - ' + 'Batch 4')
        console.log(talentNames)
        
        return data
        
    } catch (error) {
        console.error('Fetching data error:', error.message)
        return null
    }
}


fetchTalentsData()
