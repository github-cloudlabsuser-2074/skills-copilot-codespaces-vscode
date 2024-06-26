# Login to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestorageaccount"

# Create a Resource Group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a Storage Account
New-AzStorageAccount -Name $storageAccountName `
                     -ResourceGroupName $resourceGroupName `
                     -Location $location `
                     -SkuName "Standard_LRS" `
                     -Kind "StorageV2"