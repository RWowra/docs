define({"0":{y:0,u:"../Content/Topics/MOCA_WhatsNew.htm",l:-1,t:"What\u0027s New in ASCMO-MOCA V5.14",i:0.00147730801355956,a:"General ASCMO can now import Parquet files (Bosch variant). ASCMO\u0027s p-code can now be started in MATLAB® R2023b (latest supported version). ASCMO-MOCA In addition to parameters, bounds can now be imported from another open MOCA instance. Import Bounds Only Import Parameters and Bounds The map ..."},"1":{y:0,u:"../Content/Resources/Manual/Introduction/02_Safety_Information.htm",l:-1,t:"Introduction",i:0.00103670622075946,a:"In this chapter, you can find information about the intended use, the addressed target group, and information about safety and privacy related topics. Please adhere to the ETAS Safety Advice (Help \u003e Safety Advice) and to the safety information given in the user documentation. ETAS GmbH cannot be ..."},"2":{y:0,u:"../Content/Topics/MOCA_IntendedUse.htm",l:-1,t:"Intended Use",i:0.00103670622075946,a:"The ETAS ASCMO tool family is intended for offline data based modeling, model based calibration or efficient optimization of parameters in physics based models. It is not intended to operate directly in a running system. With ASCMO-STATIC and ASCMO-DYNAMIC it is possible to accurately model the ..."},"3":{y:0,u:"../Content/Topics/1_Introduction/MoCa_EN_Introduction_TargetGroup.htm",l:-1,t:"Target Group",i:0.00103670622075946,a:"Target Group This  online help  is directed at trained qualified personnel in the development and calibration sector of motor vehicle ECUs. Technical knowledge in measuring and control unit engineering is a prerequisite.   "},"4":{y:0,u:"../Content/Resources/Manual/Classification_SafetyMessages.htm",l:-1,t:"Classification of Safety Messages",i:0.00103670622075946,a:"Classification of Safety Messages Safety messages warn of dangers that can lead to personal injury or damage to property:        "},"5":{y:0,u:"../Content/Topics/1_Introduction/MOCA_EN_SafetyInformation.htm",l:-1,t:"Safety Information",i:0.00103670622075946,a:"Safety Information See  Performing the Optimization , export options in  \n           Parameters Step  or  \n            Optimization Step , and  Step 7: Export ."},"6":{y:0,u:"../Content/Resources/Manual/DataProtection.htm",l:-1,t:"Data Protection",i:0.00103670622075946,a:"If the product contains functions that process personal data, legal requirements of data protection and data privacy laws shall be complied with by the customer. As the data controller, the customer usually designs subsequent processing. Therefore, he must check if the protective measures are ..."},"7":{y:0,u:"../Content/Resources/Manual/DataAndInformationSecurity.htm",l:-1,t:"Data and Information Security",i:0.00103670622075946,a:"Data and Information Security To securely handle data in the context of this product, see the next sections about data and storage locations as well as technical and organizational measures."},"8":{y:0,u:"../Content/Resources/Manual/DataAndStorageLocations.htm",l:-1,t:"Data and Storage Locations",i:0.00103670622075946,a:"The following sections give information about data and their respective storage locations for various use cases. License Management When using the ETAS License Manager in combination with user-based licenses that are managed on the FNP license server within the customer\u0027s network, the following data ..."},"9":{y:0,u:"../Content/Resources/Manual/TechnicalAndOrganizationalMeasures.htm",l:-1,t:"Technical and Organizational Measures",i:0.00103670622075946,a:"Technical and Organizational Measures We recommend that your IT department takes appropriate technical and organizational measures, such as classic theft protection and access protection to hardware and software."},"10":{y:0,u:"../Content/Topics/1_Introduction/MoCa_EN_Introduction.htm",l:-1,t:"About ASCMO-MOCA",i:0.00103670622075946,a:"ASCMO-MOCA is a tool for Modeling and Calibration of functions with given data. These functions consist of mathematical operations on changeable parameters like lookup tables. The goal is to minimize the deviation of the output of the function to given data. The parameters of the function are ..."},"11":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Introduction.htm",l:-1,t:"Basics of ASCMO-MOCA",i:0.00103670622075946,a:"ASCMO-MOCA enables optimization of model parameters and minimizes the deviation of model prediction and desired output values. E.g. modern vehicle ECUs contain physics based models to replace or monitor real sensors. Such a physics based model is generic, but must be adapted to an actual engine. ..."},"12":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_FieldsOfApplication.htm",l:-1,t:"Fields of Application of ASCMO-MOCA",i:0.0011168156376322,a:"This section provides a general overview of the wide range of application fields of ASCMO-MOCA.  Calibration of ECU Sensor Data   Optimization of parameters Optimization of time-dependent (dynamic) functions Parameterization of ECU models (cylinder fill, torque, ...) The use of ASCMO-MOCA in the ..."},"13":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Data.htm",l:-1,t:"Data",i:0.00144524126844686,a:"Data The first steps in ASCMO-MOCA are import, analysis and preprocessing of measured data. These steps are performed in the  Data Step . See also Data Step  Assessment of the Input Data Instructions (Data Step) Step 1: Data Import  (tutorial)  "},"14":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Model_AssessmentImproovement.htm",l:-1,t:"Assessment of the Input Data",i:0.00156457076156919,a:"This section provides information on how you can assess the quality of the input data used by ASCMO-MOCA for the parameter optimization. Tabular Representation of All Model-Related Data Checking the Relevance of the Inputs Function Assessment and Improvement Graphical Analysis of Data and Function ..."},"15":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_DataTable.htm",l:-1,t:"Tabular Representation of All Model-Related Data",i:0.00130268465995473,a:"The Analysis \u003e Data Table \u003e Training Data/Test Data/Training and Test Data menu options open a table that displays the imported data columns, converted data columns from conversion formulas and additionally calculated nodes from the function. If optimization criteria are defined, also the residuals ..."},"16":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_InputRelevance.htm",l:-1,t:"Checking the Relevance of the Inputs",i:0.00877923304997647,a:"During data import, you can check the inputs\u0027 relevance to the outputs (see also  To check the relevance of the inputs ).  If you do so, a polynomial stepwise regression is done with the inputs and outputs. The stepwise regression ignores inputs with a significance \u003c 5% and can find dependent ..."},"17":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Improve_DataQuality.htm",l:-1,t:"Function Assessment and Improvement",i:0.00500959160317615,a:"The  Analysis menu offers a number of functions to compare the model output prediction  with the measured data of the function output. Specifically, these are: Graphical analysis of the measured data and the function nodes See  Graphical Analysis of Data and Function Nodes  for details. Residual ..."},"18":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_RMSE_R2.htm",l:-1,t:"Variables RMSE and R2",i:0.00980646596288186,a:"A series of variables is used for quantifying the function quality. These variables are described in this section. RMSE (Root Mean Squared Error) The RMSE describes the variance to be expected (standard deviation) about the\nmodel: A second measurement falls less than 1 RMSE from the model ..."},"19":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_UseRMSE_R2.htm",l:-1,t:"Function Evaluation Using RMSE and R2",i:0.00144332443068395,a:"Evaluation of R2 The most important variable is the coefficient of determination R2. This measure\nresults in the following evaluations: The coefficient of determination, R2, can be maximal 1. In this case, the function prediction fits exactly to each measured value. If the function would simply ..."},"20":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_FuncAssessImprove_Instr.htm",l:-1,t:"Instructions (Data Step)",i:0.00148446134469644,a:"Instructions (Data Step) The following instructions are relevant for  Function Assessment and Improvement :  "},"21":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_selectAxes.htm",l:-1,t:"Selecting Scatter Plot Axes",i:0.0103379688021872,a:"To select and store axes pairs for scatter plots, proceed as follows. In the scatter plot window, select View → Select Axes. The  \"Select Axes\" window  opens. To select axes in the \"List\" tab, proceed as follows: Go to the \"List\" tab. In the \"X-Axis\" list, select one or more inputs to be used as ..."},"22":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_drawRectangle.htm",l:-1,t:"Drawing a Rectangle",i:0.017598349360545,a:"Click in the plot. Keep the mouse button pressed and draw a rectangle around the desired points. Or - as an alternative - do the following: Right-click in the plot and select Create Rectangle from the context menu. The \"Create Rectangle\" window opens. In that window, enter the start and end points ..."},"23":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_MoveResizeRectangle.htm",l:-1,t:"Moving/Resizing a Rectangle",i:0.00892632848287635,a:"To move a rectangle, do one of the following: Click on a side of a rectangle and drag it to the desired position. Click on a rectangle, then use the arrow keys (¬→¯) to move it. To resize a rectangle, click on a corner and drag it to the desired size. To move and resize a rectangle at the same ..."},"24":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_MarkWork_Points.htm",l:-1,t:"Marking and Working on Points",i:0.00307011769223594,a:"To mark points in a scatter plot, and work on them, proceed as follows. In the scatter plot window,  draw a rectangle around the points. Right-click on the border of the rectangle and select one of the following entries from the context menu.  The points are  marked with circles  in all scatter ..."},"25":{y:0,u:"../Content/Topics/4_Tutorial/MoCa_EN_Tut_Step1_FilterData.htm",l:-1,t:"Filtering Data",i:0.00397200348075777,a:"Select Analysis \u003e Filter Data. The Filter Data window opens. The Standard Filter allows to filter single columns, the Formula Filter area allows a more complex filter. In the Standard Filter area, proceed as follows: In the empty dropdown, enter or select a column name. A filter for the selected ..."},"26":{y:0,u:"../Content/Topics/3_Concepts/MoCa_En_displayData.htm",l:-1,t:"Displaying the Data",i:0.00103670622075946,a:"To display the data in the scope window, proceed as follows: Do one of the following: Click on the  Scope View for Training Data button. Select Analysis → Scope View → *  = Training Data or Test Data or Training and Test Data. The  \"Scope View\" window  opens. Use this window to check the ..."},"27":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_ParameterOptimization.htm",l:-1,t:"Parameters ",i:0.00422111075660681,a:"Modern ECUs contain many map-based physical models 1   Similar models are used in other environments such as HiL systems.  to replace or monitor real sensors, e. g.:  Engine torque Air charge/Air mass Exhaust gas temperature Fuel system corrections To provide an optimal prediction quality, these ..."},"28":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Parameter.htm",l:-1,t:"Available Types of Parameters",i:0.0134836416094072,a:"This chapter provides a brief overview of the various types of parameters that can be used in the function (see  Step 5: Build Up the Function ) for optimization (see  Step 6: Optimization ).  The parameters are divided in to the following classes: Maps Curves Scalar 3D- and 4D-Cubes Compressed ..."},"29":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_SysConst.htm",l:-1,t:"System Constants",i:0.00361534723724946,a:"System constants can be used to provide default values for parameters. One or more parameters of any type can be assigned to a system constant, and a default value can be provided for each parameter. For non-scalar parameters, the same constant value is returned for each point. By activating a ..."},"30":{y:0,u:"../Content/Topics/3_Concepts/MOCA_EN_Concepts_Parametersets.htm",l:-1,t:"Parametersets",i:0.00207880292039303,a:"Multiple parametersets can be used and managed whereby one set is always defined as working and reference parameterset. The working parameterset is the one, which is optimized and used in the  \n            Optimization Step . The different parametersets can have different parameters, parameters with ..."},"31":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Step_Parameters_Instructions.htm",l:-1,t:"Instructions (Parameters Step)",i:0.00443829079933803,a:"Instructions (Parameters Step) The following instructions are relevant for working with parameters:  "},"32":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_CreateNewParameter.htm",l:-1,t:"\n            Create a Parameter",i:0.00595154251109425,a:"\n            Create a Parameter \n                    Click  Create in the main window of the Parameters step  ( Step 3: Parameters ) . In the Create Parameter window, enter the parameter information.  Click OK. The parameter is created. It appears in the Parameter area in the Parameters step. See  \n ..."},"33":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_ExportParameterBounds.htm",l:-1,t:"Exporting Parameters and/or Bounds",i:0.00451790567618471,a:"You can export the parameters in your ASCMO-MOCA project, their bounds (scalar, curve and map parameters), or both. The available export methods depend on the parameter type and on the export format;  Tab. 1  lists the available methods for each combination of export format and parameter type.  ..."},"34":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_ImportParameterBounds.htm",l:-1,t:"Import of Parameters and/or Bounds",i:0.00762547000706619,a:"Parameter values and/or bounds (scalar, curve and map parameters) in several formats can be imported into ASCMO-MOCA. The table below lists the available file content for each combination of export format and parameter type.    3D and 4D cubes can only be exported as CDFX files. Compressed models ..."},"35":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Import_ParamOnly.htm",l:-1,t:"Import Parameters Only",i:0.00349084642175219,a:"Parameters step \u003e Import  \u003e Parameters \u003e From File/From Open Projects Optimization step \u003e   \u003e Import \u003e Parameters \u003e From File/From Open Projects Do one of the following: Open the Parameters Step and go to the \"Parameters\" tab. Open the Optimization Step and go to the \"Optimize\" tab.  Do one of the ..."},"36":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Import_BoundsOnly.htm",l:-1,t:"Import Bounds Only",i:0.00337196461098905,a:"Parameters step \u003e Import  \u003e Bounds \u003e From File/From Open Projects Optimization step \u003e   \u003e Import \u003e Bounds \u003e From File/From Open Projects Do one of the following: Open the Parameters step and go to the Parameters tab. Open the Optimization step and go to the Optimize tab.  Do one of the following: In ..."},"37":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Import_BoundsParam.htm",l:-1,t:"Import Parameters and Bounds",i:0.00292091239728331,a:"Parameters step \u003e Import  \u003e Parameters and Bounds \u003e From File/From Open Projects Optimization step \u003e   \u003e Import \u003e Parameters and Bounds \u003e From File/From Open Projects Do one of the following: Open the Parameters step and go to the Parameters tab. Open the Optimization step and go to the Optimize ..."},"38":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_SpecifySysConst.htm",l:-1,t:"Creating and Editing a System Constant",i:0.00361534723724946,a:"To specify a system constant, proceed as follows. In the Parameters pane, go to the \"System Constants\" tab.  If there is no system constant, or if no system constant is selected, only the  \"System Constants\" table  with a single line is visible. In the \"Name\" column of the \"System Constants\" table, ..."},"39":{y:0,u:"../Content/Topics/3_Concepts/MOCA_EN_Concepts_Visualization.htm",l:-1,t:"\n            Visualization ",i:0.00207287750918686,a:"\n            Visualization  In addition to the performed steps from Data to Optimization, ASCMO-MOCA provides a Visualization Step for having results visually in one place. You can create data and parameter visualizations according to your own taste. The Visualization step  allows to combine ..."},"40":{y:0,u:"../Content/Topics/MOCA_tutorial_visualization_lock.htm",l:-1,t:"Locking the Visualization Against Changes",i:0.00103670622075946,a:"The goal of this tutorial is to edit points without having to wait for the external model evaluation after every change and to view the visualization at the same time. Stop the external model evaluation Click the   button. You can edit points without triggering the external model evaluation. Click ..."},"41":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Models.htm",l:-1,t:"Models",i:0.00633732806088143,a:"In ASCMO-MOCA, you can work with models provided as a set of formulas, or you can import models created with ASCET, FMU, Simulink, ASCMO-STATIC or ASCMO-DYNAMIC. These models can then be used as function nodes in the ASCMO-MOCA project.  Importing and connecting external models is done in the  ..."},"42":{y:0,u:"../Content/Topics/3_Concepts/MOCA_EN_Concepts_SteadyState.htm",l:-1,t:"            Steady State      ",i:0.0017069931596471,a:"            Steady State       Steady State is a concept used in the Models Step in ASCMO-MOCA for following model types: FMU models Simulink models TSiM PlugIn It can only be applied if the imported data is static. This can be checked in the Data Step (Data Sampling: Static (no time)). Steady state ..."},"43":{y:0,u:"../Content/Topics/MOCA_instructions_models_step.htm",l:-1,t:"Instructions (Models Step)",i:0.0017069931596471,a:"Instructions (Models Step) The following instructions are relevant for working with models:"},"44":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_Concepts_Models_ImportAddingASCET_FMU_Simulink.htm",l:-1,t:"Adding ASCET, FMU, Simulink Models, TSim Plugin",i:0.00729923726850979,a:"You can add the following models to your MOCA project: ASCET Models (generated with ASCET-PSL) FMU Models Simulink Models TSim Plugins These models can then be used in the function. Open the Models Step. In the Models Step, click on Add Model and select Connect to ASCET Model / Connect to FMU Model ..."},"45":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_Concepts_Models_MapASCETinput.htm",l:-1,t:"Map ASCET or FMU Inputs",i:0.00606066310809142,a:"To map ASCET or FMU inputs, proceed as follows: Open the Models Step. In the model list, select the ASCET/FMU model whose inputs you want to map. The lower part of the Models pane shows the  ASCET Model  or  FMU Model  variant. In the \"Input Mapping\" area, click on Add. The  \"Select ASCET/FMU - MOCA ..."},"46":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_Concepts_Models_MapASCETPar.htm",l:-1,t:"Mapping ASCET Parameters",i:0.00782959380602871,a:"To map ASCET parameters, proceed as follows: In the model list of the Models step, select the  ASCET model, whose parameters you want to map. The lower part of the Models pane shows the  ASCET Model  variant. In the Parameter Mapping area, click Add. The  ASCET - MOCA mapping window  opens. In the ..."},"47":{y:0,u:"../Content/Topics/6_Instructions/MOCA_EN_Concepts_Models_MapFMUPar.htm",l:-1,t:"Mapping FMU Parameters",i:0.00672161418136146,a:"To map FMU parameters, proceed as follows: In the model list of the Models step, select the FMU model whose parameters you want to map. The lower part of the Models pane shows the  FMU Model  details. In the Parameter Mapping area, click Add. The  Add FMU to MOCA Parameter Mapping window  opens. ..."},"48":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_Concepts_Models_MapASCEToutput.htm",l:-1,t:"Mapping ASCET or FMU Outputs",i:0.00606066310809142,a:"To map ASCET or FMU outputs, proceed as follows: Open the Models pane. In the model list, select the ASCET/FMU model whose outputs you want to map. The lower part of the Models pane shows the  ASCET Model  or  FMU Model  variant. In the \"Output Mapping\" area, click on Add. The  \"Select ASCET/FMU ..."},"49":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_Concepts_Models_UseASCET_FMU_Simulink_model.htm",l:-1,t:"Using an ASCET, FMU or Simulink Model",i:0.0054847587899841,a:"After mapping  parameters ,  inputs , and  outputs , proceed as follows to verify and use the ASCET, FMU or Simulink model: In the model list of the Models pane, select the ASCET/FMU/Simulink project you want to use.  The lower part of the Models pane shows the  ASCET Model ,  FMU Model  or  ..."},"50":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_Concepts_Models_ImportASCMO.htm",l:-1,t:"Importing ASCMO-STATIC/ASCMO-DYNAMIC Models",i:0.0023834101579418,a:"You can add ASCMO-STATIC or ASCMO-DYNAMIC models, which can then be used as function nodes. To import an ASCMO-STATIC/ASCMO-DYNAMIC model, proceed as follows: In the Models Step, click on Add Model → Import ASCMO Model. A file selection window opens.  In the file selection window, select the*.ascmo ..."},"51":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Models_UseASCMOmodel.htm",l:-1,t:"Using an ASCMO-STATIC/ASCMO-DYNAMIC Model",i:0.0017120144529075,a:"Before you can use an ASCMO-STATIC/ASCMO-DYNAMIC model for the optimization, you need to map all ASCMO inputs to MOCA elements to make the model available in the function. Proceed as follows: In the model list of the Models pane, select an ASCMO-STATIC/ASCMO-DYNAMIC model. The lower part of the ..."},"52":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Functions.htm",l:-1,t:"Function",i:0.00799365989995339,a:"In ASCMO-MOCA, you can work with models provided as a set of formulas, or you can import models created with Simulink, ASCET, ASCMO-STATIC or ASCMO-DYNAMIC and connect them to the ASCMO-MOCA project. Specifying a function formed by a set of formulas is done in the  Function Step . Data channels, ..."},"53":{y:0,u:"../Content/Topics/4_Tutorial/MoCa_EN_Tut_Step4_MathOperators.htm",l:-1,t:"\n            Mathematical Operators for Function Nodes",i:0.00891746372837239,a:"\n            Mathematical Operators for Function Nodes Function nodes can be added and edited in the \"Edit Node\" window. At the right side of that window, you can see buttons for common mathematical operators. The   button, for example, adds the operation .* to the formula expression. This operator ..."},"54":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Functions_FeedbackLoop.htm",l:-1,t:"Feedback Loop",i:0.00103670622075946,a:"Within a node of the Function you can access a future node using a feedback loop with time delay. This can be also used with a dynamic model. See the following graphic and ASCMO-MOCA example. Main Function Nodes engine_speed[-] = timeDelay(%Output%, 0) engine_torque[-] = %PID ..."},"55":{y:0,u:"../Content/Topics/MOCA_instructions_fuction_step.htm",l:-1,t:"Instructions (Function Step)",i:0.00103670622075946,a:"Instructions (Function Step) The following instructions are relevant for working with functions:  "},"56":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concept_Function_AddNode.htm",l:-1,t:"Add a Function Node",i:0.00672219434325299,a:"To insert a function node, proceed as follows. In the Function step, click Insert. The  \"Insert Node\" window  opens. Imported data channels are listed under Data, existing parameters are listed under Parameters, and existing function nodes and imported  models  are listed under Nodes. In the Node ..."},"57":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_Concept_Function_EditNode.htm",l:-1,t:"Editing a Function Node",i:0.0040676401671971,a:"To edit a function node, proceed as follows. In the Function Step, select an existing entry from the \"Function Nodes\" table. Double-click or click on Edit. The  \"Edit Node\" window  opens. Imported data channels are listed in the \"Data\" area, existing parameters are listed in the \"Parameters\" area, ..."},"58":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concept_Function_ExImport.htm",l:-1,t:"Exporting and Importing Functions",i:0.00532895058856859,a:"To export a function (including all subfunctions) as a text file, proceed as follows. In the  Function Step , click on Export Functions. A file selection window opens. The file type is set to Export *.mocafun file and cannot be changed. The project name is preselected as export file name.  In the ..."},"59":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Optimization.htm",l:-1,t:"Optimization",i:0.00396096487210987,a:"This section contains a description of the different optimization methods and the optimization criteria that can be used for the parameter optimization. This section contains the following subsections: Description of the Optimization Method Consideration of the Roughness Optimization Criterion ..."},"60":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Optimizer_Description.htm",l:-1,t:"Description of the Optimization Method",i:0.00151768782241282,a:"The optimizer calibrates the p calibration values of the maps/curves with the goal to minimize the deviation between the measured, predetermined values and the predicted n values. Optimization method where The squared deviation is minimized, where the square has the effect that larger deviations are ..."},"61":{y:0,u:"../Content/Topics/3_Concepts/MOCA_Concepts_Optimization_Algorithm.htm",l:-1,t:"Optimization Algorithms",i:0.0148008152536775,a:"In the  Optimization step , you can choose from the following optimization algorithms: Default (Gradient Descent) Respect Constraints (Gradient Descent) Gradient-free Optimizer Surrogate Optimizer (Global Optimization) Genetic Algorithm (Global Optimization) Simulated Annealing (Global Optimization) ..."},"62":{y:0,u:"../Content/Topics/MOCA_optimizer_options.htm",l:-1,t:"Optimizer Options",i:0.00325279460652364,a:"From the Optimization Algorithm drop-down list, select the optimization algorithm for which you want to customize the settings: Default With time-delay Code Generation When activated, C code is generated from the function and optimization works on compiled C code. This only works if the function ..."},"63":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_Optimizer_RoughConsider.htm",l:-1,t:"Consideration of the Roughness",i:0.00339497764846986,a:"Roughness of a Curve  The roughness r describes the change in the slope at the support points of the curve c. If the curve  is given by an expression c(x), the roughness is given as the sum of the second derivatives at the support points xi, i=1..k. For a curve, this means: Roughness r of a curve  ..."},"64":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Concepts_OptimizationCriterium_Decription.htm",l:-1,t:"Optimization Criterion",i:0.00655148323770816,a:"To optimize one or more outputs, there is the target criterion Smoothness that limits the variation of the stiffness (see  Consideration of the Roughness ) of a map or a curve. This factor is a weighted penalty term, Smoothness factor Si where S is the Smoothness factor and M the number of support ..."},"65":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Optimization_noSequence.htm",l:-1,t:"Optimization Without Sequence",i:0.00151768782241282,a:"Unless your project must fulfill special requirements, all steps for optimization are performed in the \"Optimize\" tab of the Optimization pane:  preparing the optimization specifying optimization options specifying optimization criteria specifying local constraints running the optimization ..."},"66":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_OptimizationSequence.htm",l:-1,t:"Optimization With a Sequence",i:0.0056366619195679,a:"If your project must fulfill special requirements, you can define a sequence of optimization steps in the  \"Sequence\" tab  of the Optimization Step. Special requirements can be, e.g., the following: First, one map shall be calibrated with a part of the data. Then the result of the first map is kept ..."},"67":{y:0,u:"../Content/Topics/3_Concepts/MoCa_Concepts_Optimization_ParamCorrelation.htm",l:-1,t:"Parameter Correlation",i:0.00676634545892793,a:"You can use the Analysis \u003e Parameter Correlation menu option to check if the parameters are correlated. A strong correlation (+1 or -1) means that two parameters do not independently affect the function node. To determine the correlation, the following happens. ASCMO-MOCA calculates the gradient ..."},"68":{y:0,u:"../Content/Topics/3_Concepts/MoCa_Concepts_Optimization_ParamSensitivity.htm",l:-1,t:"Parameter Sensitivity",i:0.00640769468279074,a:"You can use the Analysis \u003e Normalized Parameter Sensitivity menu option to check the influence of parameters on function nodes.  ASCMO-MOCA calculates the gradients G of a node regarding the parameters for all parameters pj for all training data points xi: with  F - the optimization function to be ..."},"69":{y:0,u:"../Content/Topics/3_Concepts/MoCa_EN_Step_Optimization_Instructions.htm",l:-1,t:"Instructions (Optimization Step)",i:0.00547145164961514,a:"Instructions (Optimization Step) The following instructions are relevant for optimization:  "},"70":{y:0,u:"../Content/Topics/6_Instructions/MoCa_EN_SetOptimizationCriterium.htm",l:-1,t:"Setting Optimization Criteria for a Parameter",i:0.00523696722353808,a:"In the Optimization Step, \"Parameter\" table, select a parameter. Click Optimization Criteria. If necessary, open the \"Parameter\" combo box and select another parameter. In case of unsaved changes, you are asked if you want to apply the changes. Click Apply or Discard to keep or discard the changes ..."},});