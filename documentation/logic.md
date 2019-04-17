## Space Hustle Logic Setup

# Difficulty Levels
 - Easy / Med / Hard
    - XX Turns
    - XX Starting Credits
    - XX Starting Holds

# Player Object
 - playerName
 - shipName
 - currentSector
 - profilePicLocation
 - visitedSectorsArray []
 - difficulty
    - currentHolds
    - turnsleft
    - credits
    
 - maxHolds
 
 
# Universe Object
  - Sectors
    - sectorName
    - sectorNumber 
    - portNumber Object (fk)
    - sectorWayOut
      
# Ports Object
  - portName
  - portType
  - fuelToTrade
  - orgToTrade
  - equToTrade
  - sectorNumber (FK)  
  - portPictureLocation
  
   
    - 3 Products.  Each port can be Buy or Sell for Each Product
        - Port Type 1 Sell Sell Sell
        - Port Type 2 Sell Sell Buy
        - Port Type 3 Sell Buy Sell
        - Port Type 4 Sell Buy Buy
        - Port Type 5 Buy Sell Sell
        - Port Type 6 Buy Buy Sell
        - Port Type 7 Buy Buy Buy
        - Port Type 8 Buy Sell Buy

    - Type of Port
    
Items       Status      Trading     % of max    OnBoard
-----       ------      -------     --------    -------
Fuel Ore    Buying      2720        100%              0
Organics    Buying      2020        100%              0
Equipment   Selling     1470        100%              0

