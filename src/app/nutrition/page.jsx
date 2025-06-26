import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'



export default function Nutrition() {
  return (
    <React.Fragment>
      <header className="relative w-full min-h-3/4 bg-sky-500 overflow-hidden">
                  
          {/* Wavy Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0">
              <svg 
              viewBox="0 0 1200 120" 
              fill="none" 
              className="w-full h-20"
              preserveAspectRatio="none"
              >
              <path 
                  d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
                  fill="white"
              />
              </svg>
          </div>
          
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] px-6 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"> Nutritional & Allergy Information </h1>
          </div>
      </header>
      <main className="flex w-full justify-center px-4 my-20 ">
        <div className="w-full max-w-6xl">
          <TabGroup>
            <TabList className="grid grid-cols-3 lg:grid-cols-6 gap-4 place-content-center">
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Original
                </Tab>
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Chocolate Hazelnut
                </Tab>
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Lemon
                </Tab>
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Organic Original
                </Tab>
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Organic Chocolate Hazelnut
                </Tab>
                <Tab className="rounded-xl bg-slate-300 px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-sky-50 data-selected:bg-sky-500/50 data-selected:data-hover:bg-white/10">
                  Organic Lemon
                </Tab>
            </TabList>
            <TabPanels className="mt-3 border-2 border-sky-500 rounded-lg">
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                    {/* Header */}
                  <div className="border-b-8 border-black px-2 py-1">
                    <h3 className="text-3xl font-black text-center">Nutrition Facts</h3>
                    <div className="text-sm mt-1">
                      <div className="font-bold">2 servings per container</div>
                      <div className="flex justify-between items-end mt-1">
                        <span className="font-bold">Serving size</span>
                        <span className="font-bold">1 Piece (32g)</span>
                      </div>
                    </div>
                  </div>

                  {/* Amount Per Serving */}
                  <div className="px-2 py-1 text-sm">
                    <div className="font-bold">Amount Per Serving</div>
                  </div>
                    
                    {/* Calories */}
                    <div className="px-2 py-2 border-b-8 border-black">
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-bold">Calories</span>
                        <span className="text-3xl font-bold">130</span>
                      </div>
                    </div>
                    
                    {/* Daily Value Header */}
                    <div className="px-2 py-1">
                      <div className="text-right text-sm font-bold">% Daily Value*</div>
                    </div>
                    
                    {/* Nutrients */}
                    <div className="text-sm">
                      {/* Total Fat */}
                      <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                        <span className="font-bold">Total Fat 8g</span>
                        <span className="font-bold">10%</span>
                      </div>
                      
                      {/* Saturated Fat */}
                      <div className="px-6 py-1 border-b border-gray-300 flex justify-between">
                        <span>Saturated Fat 2.5g</span>
                        <span className="font-bold">13%</span>
                      </div>
                      
                      {/* Trans Fat */}
                      <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                        <span className="italic">Trans Fat 0g</span>
                        <span></span>
                      </div>
                      
                      {/* Cholesterol */}
                      <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                        <span className="font-bold">Cholesterol 10mg</span>
                        <span className="font-bold">3%</span>
                      </div>
                      
                      {/* Sodium */}
                      <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                        <span className="font-bold">Sodium 50mg</span>
                        <span className="font-bold">2%</span>
                      </div>
                      
                      {/* Total Carbohydrate */}
                      <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                        <span className="font-bold">Total Carbohydrate 15g</span>
                        <span className="font-bold">5%</span>
                      </div>
                      
                      {/* Dietary Fiber */}
                      <div className="px-6 py-1 border-b border-gray-300 flex justify-between">
                        <span>Dietary Fiber 1g</span>
                        <span className="font-bold">4%</span>
                      </div>
                      
                      {/* Total Sugars */}
                      <div className="px-6 py-1 border-b border-gray-300 flex justify-between">
                        <span>Total Sugars 9g</span>
                        <span></span>
                      </div>
                      
                      {/* Added Sugars */}
                      <div className="px-10 py-1 border-b border-gray-400 flex justify-between">
                        <span>Includes 9g Added Sugars</span>
                        <span className="font-bold">18%</span>
                      </div>
                      
                      {/* Protein */}
                      <div className="px-2 py-1 border-b-8 border-black flex justify-between">
                        <span className="font-bold">Protein 2g</span>
                        <span></span>
                      </div>
                      
                      {/* Vitamins and Minerals */}
                      <div className="px-2 py-1 border-b border-gray-300 flex justify-between">
                        <span>Vitamin D 0mcg</span>
                        <span className="font-bold">0%</span>
                      </div>
                      
                      <div className="px-2 py-1 border-b border-gray-300 flex justify-between">
                        <span>Calcium 19mg</span>
                        <span className="font-bold">2%</span>
                      </div>
                      
                      <div className="px-2 py-1 border-b border-gray-300 flex justify-between">
                        <span>Iron 0mg</span>
                        <span className="font-bold">2%</span>
                      </div>
                      
                      <div className="px-2 py-1 border-b-4 border-black flex justify-between">
                        <span>Potassium 44mg</span>
                        <span className="font-bold">0%</span>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="px-2 py-2 text-xs">
                      <div className="mb-2">
                        * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                      </div>
                      
                      <div>
                        <span className="font-bold">INGREDIENTS:</span> WATER, ORGANIC PHYLLO DOUGH (ORGANIC WHEAT FLOUR, FILTERED WATER, ORGANIC TAPIOCA STARCH, ORGANIC SOY OIL, SALT, ORGANIC MALT EXTRACT), ORGANIC SOY LECITHIN, ORGANIC PEANUTS, CANE SUGAR, BUTTER, WATER, TRI-CALCIUM PHOSPHATE), ORGANIC ORGANIC HONEY, ORGANIC CINNAMON, ORGANIC LEMON JUICE CONCENTRATE), TREE NUTS (WALNUTS), WHEAT
                      </div>
                    </div>
                  
                </TabPanel>
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                  {/* Header */}
                  <div className="border-b-8 border-black px-2 py-1">
                    <h3 className="text-3xl font-black text-center">Nutrition Facts</h3>
                    <div className="text-sm mt-1">
                      <div className="font-bold">2 servings per container</div>
                      <div className="flex justify-between items-end mt-1">
                        <span className="font-bold">Serving size</span>
                        <span className="font-bold">1 Piece (35g)</span>
                      </div>
                    </div>
                  </div>

                  {/* Amount Per Serving */}
                  <div className="px-2 py-1 text-sm">
                    <div className="font-bold">Amount Per Serving</div>
                  </div>
                  
                  {/* Calories */}
                  <div className="px-2 py-2 border-b-8 border-black">
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold">Calories</span>
                      <span className="text-3xl font-bold">150</span>
                    </div>
                  </div>
                  
                  {/* Daily Value Header */}
                  <div className="px-2 py-1">
                    <div className="text-right text-sm font-bold">% Daily Value*</div>
                  </div>
                  
                  {/* Nutrients */}
                  <div className="text-sm">
                    {/* Total Fat */}
                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span className="font-bold">Total Fat 9g</span>
                      <span className="font-bold">12%</span>
                    </div>
                    
                    {/* Saturated Fat */}
                    <div className="px-6 py-1 border-b border-gray-300 flex justify-between">
                      <span>Saturated Fat 3.5g</span>
                      <span className="font-bold">18%</span>
                    </div>
                    
                    {/* Trans Fat */}
                    <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                      <span className="italic">Trans Fat 0g</span>
                      <span></span>
                    </div>
                    
                    {/* Cholesterol */}
                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span className="font-bold">Cholesterol 10mg</span>
                      <span className="font-bold">3%</span>
                    </div>
                    
                    {/* Sodium */}
                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span className="font-bold">Sodium 55mg</span>
                      <span className="font-bold">2%</span>
                    </div>
                    
                    {/* Total Carbohydrate */}
                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span className="font-bold">Total Carbohydrate 16g</span>
                      <span className="font-bold">6%</span>
                    </div>
                    
                    {/* Dietary Fiber */}
                    <div className="px-6 py-1 border-b border-gray-300 flex justify-between">
                      <span>Dietary Fiber 1g</span>
                      <span className="font-bold">4%</span>
                    </div>
                    
                    {/* Total Sugars */}
                    <div className="px-6 py-1 border-b border-gray-300 flex justify-between">
                      <span>Total Sugars 10g</span>
                      <span></span>
                    </div>
                    
                    {/* Added Sugars */}
                    <div className="px-10 py-1 border-b border-gray-400 flex justify-between">
                      <span>Includes 10g Added Sugars</span>
                      <span className="font-bold">20%</span>
                    </div>
                    
                    {/* Protein */}
                    <div className="px-2 py-1 border-b-8 border-black flex justify-between">
                      <span className="font-bold">Protein 2g</span>
                      <span></span>
                    </div>
                    
                    {/* Vitamins and Minerals */}
                    <div className="px-2 py-1 border-b border-gray-300 flex justify-between">
                      <span>Vitamin D 0mcg</span>
                      <span className="font-bold">2%</span>
                    </div>
                    
                    <div className="px-2 py-1 border-b border-gray-300 flex justify-between">
                      <span>Calcium 24mg</span>
                      <span className="font-bold">2%</span>
                    </div>
                    
                    <div className="px-2 py-1 border-b border-gray-300 flex justify-between">
                      <span>Iron 1mg</span>
                      <span className="font-bold">4%</span>
                    </div>
                    
                    <div className="px-2 py-1 border-b-4 border-black flex justify-between">
                      <span>Potassium 63mg</span>
                      <span className="font-bold">2%</span>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="px-2 py-2 text-xs">
                    <div className="mb-2">
                      * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                    </div>
                    
                    <div>
                      <span className="font-bold">INGREDIENTS:</span> ORGANIC PHYLLO DOUGH (ORGANIC WHEAT FLOUR, FILTERED WATER, ORGANIC TAPIOCA STARCH, ORGANIC SOY OIL, SALT, ORGANIC MALT EXTRACT, ORGANIC SOY LECITHIN TRI-CALCIUM PHOSPHATE), ORGANIC WALNUTS, CANE SUGAR, BUTTER, WATER, ORGANIC HONEY, ORGANIC CHOCOLATE HAZELNUT SPREAD (ORGANIC CANE SUGAR, ORGANIC HAZELNUT, ORGANIC NON-FAT DRY MILK, ORGANIC NIGHT REFINED COCONUT OIL, ORGANIC EXPELLER PRESSED CANOLA OIL, ORGANIC COCOA POWDER (PROCESSED WITH ALKALI), ORGANIC SUNFLOWER LECITHIN, ORGANIC NATURAL FLAVOR, ORGANIC CINNAMON, ORGANIC LEMON JUICE CONCENTRATE). ALLERGENS: CONTAINS MILK, SOY, TREE NUTS (WALNUTS, HAZELNUTS, COCONUT), WHEAT
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                  {/* Header */}
                  <div className="border-b-8 border-black px-2 py-1">
                    <h3 className="text-3xl font-black text-center">Nutrition Facts</h3>
                    <div className="text-sm mt-1">
                      <div className="font-bold">2 servings per container</div>
                      <div className="flex justify-between items-end mt-1">
                        <span className="font-bold">Serving size</span>
                        <span className="font-bold">1 Piece (36g)</span>
                      </div>
                    </div>
                  </div>

                  {/* Amount Per Serving */}
                  <div className="px-2 py-1 text-sm">
                    <div className="font-bold">Amount Per Serving</div>
                  </div>
                  
                  {/* Calories */}
                  <div className="px-2 py-2 border-b-8 border-black">
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold">Calories</span>
                      <span className="text-3xl font-bold">150</span>
                    </div>
                  </div>
                  
                  {/* Daily Value Header */}
                    <div className="px-2 py-1">
                      <div className="text-right text-sm font-bold">% Daily Value*</div>
                    </div>
                  
                  {/* Nutrients */}
                  <div className="text-sm">
                    {/* Total Fat */}
                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span className="font-bold">Total Fat 9g</span>
                      <span className="font-bold">12%</span>
                    </div>
                    
                    {/* Saturated Fat */}
                    <div className="px-6 py-1 border-b border-gray-300 flex justify-between">
                      <span>Saturated Fat 3g</span>
                      <span className="font-bold">15%</span>
                    </div>
                    
                    {/* Trans Fat */}
                    <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                      <span className="italic">Trans Fat 0g</span>
                      <span></span>
                    </div>
                    
                    {/* Cholesterol */}
                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span className="font-bold">Cholesterol 10mg</span>
                      <span className="font-bold">3%</span>
                    </div>
                    
                    {/* Sodium */}
                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span className="font-bold">Sodium 65mg</span>
                      <span className="font-bold">3%</span>
                    </div>
                    
                    {/* Total Carbohydrate */}
                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span className="font-bold">Total Carbohydrate 16g</span>
                      <span className="font-bold">6%</span>
                    </div>
                    
                    {/* Dietary Fiber */}
                    <div className="px-6 py-1 border-b border-gray-300 flex justify-between">
                      <span>Dietary Fiber 1g</span>
                      <span className="font-bold">4%</span>
                    </div>
                    
                    {/* Total Sugars */}
                    <div className="px-6 py-1 border-b border-gray-300 flex justify-between">
                      <span>Total Sugars 11g</span>
                      <span></span>
                    </div>
                    
                    {/* Added Sugars */}
                    <div className="px-10 py-1 border-b border-gray-400 flex justify-between">
                      <span>Includes 11g Added Sugars</span>
                      <span className="font-bold">22%</span>
                    </div>
                    
                    {/* Protein */}
                    <div className="px-2 py-1 border-b-8 border-black flex justify-between">
                      <span className="font-bold">Protein 2g</span>
                      <span></span>
                    </div>
                    
                    {/* Vitamins and Minerals */}
                    <div className="px-2 py-1 border-b border-gray-300 flex justify-between">
                      <span>Vitamin D 0mcg</span>
                      <span className="font-bold">0%</span>
                    </div>
                    
                    <div className="px-2 py-1 border-b border-gray-300 flex justify-between">
                      <span>Calcium 19mg</span>
                      <span className="font-bold">2%</span>
                    </div>
                    
                    <div className="px-2 py-1 border-b border-gray-300 flex justify-between">
                      <span>Iron 1mg</span>
                      <span className="font-bold">2%</span>
                    </div>
                    
                    <div className="px-2 py-1 border-b-4 border-black flex justify-between">
                      <span>Potassium 45mg</span>
                      <span className="font-bold">0%</span>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="px-2 py-2 text-xs">
                    <div className="mb-2">
                      * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                    </div>
                    
                    <div>
                      <span className="font-bold">INGREDIENTS:</span> CANE SUGAR, PHYLLO DOUGH (ENRICHED WHEAT FLOUR [WHEAT FLOUR, NIACIN, IRON, THIAMIN MONONITRATE, RIBOFLAVIN, FOLIC ACID], WATER, CORN STARCH, SALT, CANOLA OIL, VITAL WHEAT GLUTEN, DEXTROSE, MALTODEXTRIN, CITRIC ACID), ORGANIC WALNUTS, BUTTER, WATER, ORGANIC HONEY, ORGANIC LEMON JUICE, ORGANIC CINNAMON, ORGANIC LEMON PEEL. CONTAINS: MILK, TREE NUTS (WALNUTS), WHEAT
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                  {/* Header */}
                    <div className="border-b-8 border-black px-2 py-1">
                      <h3 className="text-3xl font-black text-center">Nutrition Facts</h3>
                      <div className="text-sm mt-1">
                        <div className="font-bold">2 servings per container</div>
                        <div className="flex justify-between items-end mt-1">
                          <span className="font-bold">Serving size</span>
                          <span className="font-bold">1 Piece (32g)</span>
                        </div>
                      </div>
                    </div>

                    {/* Amount Per Serving */}
                    <div className="px-2 py-1 text-sm">
                      <div className="font-bold">Amount Per Serving</div>
                    </div>

                    {/* Calories */}
                    <div className="px-2 py-2 border-b-8 border-black">
                      <div className="flex justify-between items-center">
                        <span className="text-3xl font-black">Calories</span>
                        <span className="text-3xl font-black">130</span>
                      </div>
                    </div>

                    {/* Daily Value Header */}
                    <div className="px-2 py-1">
                      <div className="text-right text-sm font-bold">% Daily Value*</div>
                    </div>

                    {/* Nutrients */}
                    <div className="text-sm">
                      {/* Total Fat */}
                      <div className="px-2 py-1 border-b border-black flex justify-between">
                        <span className="font-bold">Total Fat <span className="font-normal">8g</span></span>
                        <span className="font-bold">10%</span>
                      </div>

                      {/* Saturated Fat */}
                      <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                        <span>Saturated Fat 2.5g</span>
                        <span className="font-bold">13%</span>
                      </div>

                      {/* Trans Fat */}
                      <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                        <span className="italic">Trans Fat 0g</span>
                        <span></span>
                      </div>

                      {/* Cholesterol */}
                      <div className="px-2 py-1 border-b border-black flex justify-between">
                        <span className="font-bold">Cholesterol <span className="font-normal">10mg</span></span>
                        <span className="font-bold">3%</span>
                      </div>

                      {/* Sodium */}
                      <div className="px-2 py-1 border-b border-black flex justify-between">
                        <span className="font-bold">Sodium <span className="font-normal">50mg</span></span>
                        <span className="font-bold">2%</span>
                      </div>

                      {/* Total Carbohydrate */}
                      <div className="px-2 py-1 border-b border-black flex justify-between">
                        <span className="font-bold">Total Carbohydrate <span className="font-normal">15g</span></span>
                        <span className="font-bold">5%</span>
                      </div>

                      {/* Dietary Fiber */}
                      <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                        <span>Dietary Fiber 1g</span>
                        <span className="font-bold">4%</span>
                      </div>

                      {/* Total Sugars */}
                      <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                        <span>Total Sugars 9g</span>
                        <span></span>
                      </div>

                      {/* Added Sugars */}
                      <div className="px-10 py-1 border-b-4 border-black flex justify-between">
                        <span>Includes 9g Added Sugars</span>
                        <span className="font-bold">18%</span>
                      </div>

                      {/* Protein */}
                      <div className="px-2 py-1 border-b-8 border-black flex justify-between">
                        <span className="font-bold">Protein <span className="font-normal">2g</span></span>
                        <span></span>
                      </div>

                      {/* Vitamins and Minerals */}
                      <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                        <span>Vitamin D 0mcg</span>
                        <span className="font-bold">0%</span>
                      </div>

                      <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                        <span>Calcium 19mg</span>
                        <span className="font-bold">2%</span>
                      </div>

                      <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                        <span>Iron 0mg</span>
                        <span className="font-bold">2%</span>
                      </div>

                      <div className="px-2 py-1 border-b-4 border-black flex justify-between">
                        <span>Potassium 44mg</span>
                        <span className="font-bold">0%</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-2 py-2 text-xs leading-tight">
                      <div className="mb-2">
                        * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                      </div>

                      <div>
                        <span className="font-bold">INGREDIENTS:</span> ORGANIC PHYLLO DOUGH (ORGANIC WHEAT FLOUR, FILTERED WATER, ORGANIC TAPIOCA STARCH, ORGANIC SOY OIL, SALT, ORGANIC MALT EXTRACT, ORGANIC SOY LECITHIN, TRI-CALCIUM PHOSPHATE), ORGANIC WALNUTS, CANE SUGAR, BUTTER, WATER, ORGANIC HONEY, ORGANIC CINNAMON, ORGANIC LEMON JUICE
                      </div>
                      
                      <div className="mt-2 font-bold">
                        CONTAINS: TREE NUTS (WALNUTS), WHEAT
                      </div>
                    </div>
                </TabPanel>
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                  {/* Header */}
                  <div className="border-b-8 border-black px-2 py-1">
                    <h3 className="text-3xl font-black text-center">Nutrition Facts</h3>
                    <div className="text-sm mt-1">
                      <div className="font-bold">2 servings per container</div>
                      <div className="flex justify-between items-end mt-1">
                        <span className="font-bold">Serving size</span>
                        <span className="font-bold">1 Piece (35g)</span>
                      </div>
                    </div>
                  </div>

                  {/* Amount Per Serving */}
                  <div className="px-2 py-1 text-sm">
                    <div className="font-bold">Amount Per Serving</div>
                  </div>

                  {/* Calories */}
                  <div className="px-2 py-2 border-b-8 border-black">
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-black">Calories</span>
                      <span className="text-3xl font-black">150</span>
                    </div>
                  </div>

                  {/* Daily Value Header */}
                  <div className="px-2 py-1">
                    <div className="text-right text-sm font-bold">% Daily Value*</div>
                  </div>

                  {/* Nutrients */}
                  <div className="text-sm">
                    {/* Total Fat */}
                    <div className="px-2 py-1 border-b border-black flex justify-between">
                      <span className="font-bold">Total Fat <span className="font-normal">9g</span></span>
                      <span className="font-bold">12%</span>
                    </div>

                    {/* Saturated Fat */}
                    <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                      <span>Saturated Fat 3.5g</span>
                      <span className="font-bold">18%</span>
                    </div>

                    {/* Trans Fat */}
                    <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                      <span className="italic">Trans Fat 0g</span>
                      <span></span>
                    </div>

                    {/* Cholesterol */}
                    <div className="px-2 py-1 border-b border-black flex justify-between">
                      <span className="font-bold">Cholesterol <span className="font-normal">10mg</span></span>
                      <span className="font-bold">3%</span>
                    </div>

                    {/* Sodium */}
                    <div className="px-2 py-1 border-b border-black flex justify-between">
                      <span className="font-bold">Sodium <span className="font-normal">55mg</span></span>
                      <span className="font-bold">2%</span>
                    </div>

                    {/* Total Carbohydrate */}
                    <div className="px-2 py-1 border-b border-black flex justify-between">
                      <span className="font-bold">Total Carbohydrate <span className="font-normal">16g</span></span>
                      <span className="font-bold">6%</span>
                    </div>

                    {/* Dietary Fiber */}
                    <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                      <span>Dietary Fiber 1g</span>
                      <span className="font-bold">4%</span>
                    </div>

                    {/* Total Sugars */}
                    <div className="px-6 py-1 border-b border-gray-400 flex justify-between">
                      <span>Total Sugars 10g</span>
                      <span></span>
                    </div>

                    {/* Added Sugars */}
                    <div className="px-10 py-1 border-b-4 border-black flex justify-between">
                      <span>Includes 10g Added Sugars</span>
                      <span className="font-bold">20%</span>
                    </div>

                    {/* Protein */}
                    <div className="px-2 py-1 border-b-8 border-black flex justify-between">
                      <span className="font-bold">Protein <span className="font-normal">2g</span></span>
                      <span></span>
                    </div>

                    {/* Vitamins and Minerals */}
                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span>Vitamin D 0mcg</span>
                      <span className="font-bold">2%</span>
                    </div>

                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span>Calcium 24mg</span>
                      <span className="font-bold">2%</span>
                    </div>

                    <div className="px-2 py-1 border-b border-gray-400 flex justify-between">
                      <span>Iron 1mg</span>
                      <span className="font-bold">4%</span>
                    </div>

                    <div className="px-2 py-1 border-b-4 border-black flex justify-between">
                      <span>Potassium 63mg</span>
                      <span className="font-bold">2%</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-2 py-2 text-xs leading-tight">
                    <div className="mb-2">
                      * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                    </div>

                    <div>
                      <span className="font-bold">INGREDIENTS:</span> ORGANIC PHYLLO DOUGH (ORGANIC WHEAT FLOUR, FILTERED WATER, ORGANIC TAPIOCA STARCH, ORGANIC SOY OIL, SALT, ORGANIC MALT EXTRACT, ORGANIC SOY LECITHIN TRI-CALCIUM PHOSPHATE), ORGANIC WALNUTS, CANE SUGAR, BUTTER, WATER, ORGANIC HONEY, ORGANIC CHOCOLATE HAZELNUT SPREAD (ORGANIC CANE SUGAR, ORGANIC HAZELNUT, ORGANIC NON-FAT DRY MILK, ORGANIC NIGHT REFINED COCONUT OIL, ORGANIC EXPELLER PRESSED CANOLA OIL, ORGANIC COCOA POWDER (PROCESSED WITH ALKALI), ORGANIC SUNFLOWER LECITHIN, ORGANIC NATURAL FLAVOR), ORGANIC CINNAMON, ORGANIC LEMON JUICE CONCENTRATE.
                    </div>
                    
                    <div className="mt-2 font-bold">
                      CONTAINS: MILK, SOY, TREE NUTS (WALNUTS, HAZELNUTS, COCONUT), WHEAT
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="rounded-xl bg-sky-50 p-3">
                  {/* Header */}
                  <div className="border-b-8 border-black px-2 py-1">
                    <h3 className="text-3xl font-black text-center">Nutrition Facts</h3>
                    <div className="text-sm mt-1">
                      <div className="font-bold">2 servings per container</div>
                      <div className="flex justify-between items-end mt-1">
                        <span className="font-bold">Serving size</span>
                        <span className="font-bold">1 Piece (36g)</span>
                      </div>
                    </div>
                  </div>

                  {/* Amount Per Serving */}
                  <div className="px-2 py-1 text-sm">
                    <div className="font-bold">Amount Per Serving</div>
                  </div>
                  
                  {/* Calories */}
                  <div className="px-3 py-2 border-b-8 border-black">
                    <div className="flex justify-between items-end">
                      <span className="text-3xl font-bold">Calories</span>
                      <span className="text-3xl font-bold">150</span>
                    </div>
                  </div>
                  
                  {/* Daily Value Header */}
                  <div className="px-2 py-1">
                    <div className="text-right text-sm font-bold">% Daily Value*</div>
                  </div>
                  
                  {/* Nutrients */}
                  <div className="text-sm">
                    {/* Total Fat */}
                    <div className="flex justify-between px-3 py-1 border-b border-gray-400">
                      <span className="font-bold">Total Fat 9g</span>
                      <span className="font-bold">12%</span>
                    </div>
                    
                    {/* Saturated Fat */}
                    <div className="flex justify-between px-6 py-1 border-b border-gray-400">
                      <span>Saturated Fat 3g</span>
                      <span className="font-bold">15%</span>
                    </div>
                    
                    {/* Trans Fat */}
                    <div className="flex justify-between px-6 py-1 border-b border-gray-400">
                      <span className="italic">Trans Fat 0g</span>
                      <span></span>
                    </div>
                    
                    {/* Cholesterol */}
                    <div className="flex justify-between px-3 py-1 border-b border-gray-400">
                      <span className="font-bold">Cholesterol 10mg</span>
                      <span className="font-bold">3%</span>
                    </div>
                    
                    {/* Sodium */}
                    <div className="flex justify-between px-3 py-1 border-b border-gray-400">
                      <span className="font-bold">Sodium 55mg</span>
                      <span className="font-bold">2%</span>
                    </div>
                    
                    {/* Total Carbohydrate */}
                    <div className="flex justify-between px-3 py-1 border-b border-gray-400">
                      <span className="font-bold">Total Carbohydrate 17g</span>
                      <span className="font-bold">6%</span>
                    </div>
                    
                    {/* Dietary Fiber */}
                    <div className="flex justify-between px-6 py-1 border-b border-gray-400">
                      <span>Dietary Fiber 1g</span>
                      <span className="font-bold">4%</span>
                    </div>
                    
                    {/* Total Sugars */}
                    <div className="flex justify-between px-6 py-1 border-b border-gray-400">
                      <span>Total Sugars 11g</span>
                      <span></span>
                    </div>
                    
                    {/* Added Sugars */}
                    <div className="flex justify-between px-8 py-1 border-b border-gray-400">
                      <span>Includes 11g Added Sugars</span>
                      <span className="font-bold">22%</span>
                    </div>
                    
                    {/* Protein */}
                    <div className="flex justify-between px-3 py-1 border-b-4 border-black">
                      <span className="font-bold">Protein 2g</span>
                      <span></span>
                    </div>
                  </div>
                  
                  {/* Vitamins and Minerals */}
                  <div className="text-sm px-3 py-2 border-b-4 border-black">
                    <div className="flex justify-between py-1">
                      <span>Vitamin D 0mcg</span>
                      <span>0%</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Calcium 15mg</span>
                      <span>2%</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Iron 1mg</span>
                      <span>2%</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Potassium 48mg</span>
                      <span>2%</span>
                    </div>
                  </div>
                  
                  {/* Footnote */}
                  <div className="px-3 py-2 text-xs border-b border-black">
                    <p>* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
                  </div>
                  
                  {/* Ingredients */}
                  <div className="px-3 py-2 text-xs">
                    <p className="font-bold mb-2">INGREDIENTS:</p>
                    <p className="leading-tight">
                      CANE SUGAR, ORGANIC PHYLLO DOUGH (ORGANIC WHEAT FLOUR, FILTERED WATER, ORGANIC TAPIOCA STARCH, ORGANIC SOY OIL, SALT, ORGANIC MALT EXTRACT, ORGANIC SOY LECITHIN), TRI-CALCIUM PHOSPHATE), ORGANIC WALNUTS, BUTTER, WATER, ORGANIC HONEY, ORGANIC LEMON JUICE, ORGANIC CINNAMON, ORGANIC LEMON ZEST, SALT.
                    </p>
                    <p className="mt-2 font-bold">
                      CONTAINS: MILK, SOY, TREE NUTS (WALNUTS), WHEAT.
                    </p>
                  </div>
                </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>
    </React.Fragment>
  )
}

export const metadata = {
    title: "Nutritional Info",
    description: "This page shows the nutritional value plesent in our baklava"
}
