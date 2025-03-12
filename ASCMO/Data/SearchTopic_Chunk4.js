define({"278":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_WorkingwithASCMO-DYNAMIC.htm",l:-1,t:"Tutorial: Working with ASCMO-DYNAMIC",i:0.000553165468977376,a:"This tutorial introduces the basic functions of  ASCMO-DYNAMIC, the ETAS ASCMO toolbox for dynamic system identification. The tutorial is structured as follows: Inputs and Outputs of the Measured Engine Data Import Data Analysis  \n      Model Training Model Prediction  Model Validation Model Export "},"279":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_SystemtobeIdentified.htm",l:-1,t:"Inputs and Outputs of the Measured Engine",i:0.00810923385049123,a:"The example (a diesel engine) measured with respect to the inputs and outputs given in  Illustration of the Measured Diesel Engine  and  Meaning of Inputs and Outputs of the Measured Diesel Engine .  Illustration of the Measured Diesel Engine Meaning of Inputs and Outputs of the Measured Diesel ..."},"280":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_DataImport.htm",l:-1,t:"Data Import",i:0.000491763154901758,a:"This section describes the training data import. Start ASCMO-DYNAMIC In the Windows Start menu, go to the  ETAS ASCMO V5.14 program group and select ASCMO Desk V5.14. The  ASCMO-DESK window opens. ASCMO-DESK window In the  ASCMO-DESK window, click the Transient Modeling tile. ASCMO-DYNAMIC opens. ..."},"281":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_DataAnalysis.htm",l:-1,t:"Data Analysis ",i:0.000491763154901758,a:" Even though the actual modeling of ASCMO-DYNAMIC (see  \n      Model Training ) is straightforward and does not require any data preprocessing or user experience, an analysis of the loaded data set is recommended.  The Data menu provides a set of tools that help increase the model quality by ..."},"282":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_TrainingDataTable.htm",l:-1,t:"Training Data Table",i:0.000424592781422745,a:"Training Data Table A table of the time series can be found under Data \u003e Table \u003e Training Data."},"283":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ScatterPlots.htm",l:-1,t:"Scatter Plots ",i:0.000424592781422745,a:" The scatter plots (shown via Data \u003e Scatter Plot \u003e Training Data) show the coverage of the training data in the possible input and output range. By marking a block in the Data Set vs. Time plot, the corresponding input and output values at these time steps of the time series can be visualized. The ..."},"284":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_Resampling.htm",l:-1,t:"Resampling ",i:0.000424592781422745,a:" Sometimes the measured data is sampled within too small a sampling time Ts (sampling frequency too high). A proper sampling time is about Ts £ T/10, where T is the system\u0027s dominant time constant. The down-sampled data set will also benefit the later modeling by reducing the training time. The ..."},"285":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_NoiseFiltering.htm",l:-1,t:"Noise Filtering ",i:0.000424592781422745,a:" To get rid of signal disturbances, the dataset can be modified by a moving average filter  (Data \u003e Noise Filtering) ,  where the new signal is generated as follows:  n = filter window size The window size n is given in time steps, so it depends on the current sample time. If the sample time is 0.1s ..."},"286":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_CrossCorrelationInputs.htm",l:-1,t:"Cross Correlation Inputs ",i:0.000424592781422745,a:" Ideally, all inputs are uncorrelated. This can be checked with a cross-correlation analysis (via Data \u003e Cross Correlation Inputs).  The desired behavior is shown below using the diesel engine example. The plots CCF(xi,xi) show the cross-correlation of each input with itself, which is actually the ..."},"287":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_AmplitudeSpectra.htm",l:-1,t:"Amplitude Spectra",i:0.000785498051102039,a:"Amplitude Spectra With Data \u003e Spectrum of Channels you can display the amplitude spectra of the inputs and outputs. More or less narrow peaks indicate the presence of noise of more or less defined frequency."},"288":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_PhasePlot-ACFandIACF.htm",l:-1,t:"Phase Plot, ACF and IACF",i:0.00702141423817359,a:"Data \u003e Phase Plot and IACF Outputs makes it possible to identify the time dependency of the identification task. Each output is shown in a different window. Phase Plot  A scatter plot of output(k) over output(k-t); the phase/lag t can be adjusted in the lower left corner of the window (the standard ..."},"289":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ModelTraining.htm",l:-1,t:"\n      Model Training",i:0.00185364520166659,a:"\n      Model Training \n            There are two ways to start the model training, either via Model \u003e Configurations ( \n      Model Training ) or via   Model \u003e TrainModels ( \n      Model Training ).  Starting the training via Model \u003e Configurations allows you to set the model properties individually ..."},"290":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ModelingMethodandAlgorithm.htm",l:-1,t:"\n            Modeling Method and Algorithm",i:0.000739714190261375,a:"\n            Modeling Method and Algorithm \n            The default modeling method is NARX Structure, the default modeling algorithm is ASCMO Gaussian Process Spectrum (ASC GP-Spectrum), which represents the recent improvement of the standard ASC algorithm to cope with large data sets. ASC ..."},"291":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_FeedbackStructure.htm",l:-1,t:"Feedback Structure (NARX)",i:0.000739714190261375,a:"Definition of the maximum time lag for all inputs and outputs to be considered within the NARX structure. The feedback values will be called features in the following. The results of the IACF analysis (see  Phase Plot, ACF and IACF ), usually serve as a good starting point. In the diesel example, ..."},"292":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_DimensionalityReduction.htm",l:-1,t:"Dimensionality Reduction ",i:0.000739714190261375,a:" Reducing the number of feedback values (features) can increase model quality and accelerate model training.  Several options are available in the Model properties window ( \n      Model Training ). None: Use all features in the NARX structure in accordance with the set maximum time lags. This is ..."},"293":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ModelPrediction.htm",l:-1,t:"Model Prediction ",i:0.000491763154901758,a:"Model Prediction  After model training, the model prediction is automatically plotted over the output measurements of the training dataset. The model quality is given with the RMSE and R2 measure."},"294":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_SigmaPrediction.htm",l:-1,t:"Sigma Prediction ",i:0.000424592781422745,a:" The ASC Dyn algorithm also provides a sigma prediction (View \u003e Show Sigma), which shows the model\u0027s uncertainty.  A weaker model behavior (i.e. a smaller value of R2) corresponds to increasing sigma values. In the diesel engine example, the very good model quality is connected with a small sigma."},"295":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_Multi-Step_One-StepAheadPrediction.htm",l:-1,t:"Multi-Step/One-Step Ahead Prediction ",i:0.00198621015080773,a:"Multi-Step/One-Step Ahead Prediction  The mechanism of the NARX model prediction  can be changed between one-step and multi-step ahead prediction (Model \u003e NARX Model Options \u003e One Step Ahead Prediction / Multi Step Ahead Prediction). "},"296":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ModelValidation.htm",l:-1,t:"Model Validation",i:0.000852668424581052,a:"To check the model quality on an independent data set, a second data set (Test data) can be imported.  To import test data Select File \u003e Import Data \u003e Test. A file selection window opens. Navigate to the folder \u003cinstallation\u003e\\Example\\AscmoDynamic and select the file Example_Dynamic_Engine.xls Click ..."},"297":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ModelValidationwithScatterPlot.htm",l:-1,t:"Model Validation with Scatter Plot ",i:0.000424592781422745,a:" You can use the functions Data \u003e Scatter Plot \u003e All Data and View \u003e Select Axes to check the distribution of the test data and its gradients.  To avoid extrapolation, the test data (black in the above screenshot) is expected to be within the range of the training data (yellow in the above ..."},"298":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_MeasuredvsPredicted.htm",l:-1,t:"Measured vs. Predicted ",i:0.000424592781422745,a:" The menu options Model \u003e Measured *  vs. Predicted and Model \u003e All Measured Data vs. Predicted (* = Training Data or Validation Data or Test Data) plot the measured values of the training or test data or both against the model prediction. The expected result is a diagonal line, which would indicate ..."},"299":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_CrossValidation.htm",l:-1,t:"Cross Validation ",i:0.000424592781422745,a:" If no test data set is available, an n-fold cross-validation can be carried out on the training data set. To do so, proceed as follows.  Cross-validation  Select Model \u003e Cross Validation on Training Set. In the Cross Validation window, enter the number of data sets you want to use for ..."},"300":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_Cross-correlatedRelaxationValidation.htm",l:-1,t:"Cross-Correlation of the Residuals (CCR) Validation",i:0.000424592781422745,a:"The CCR analysis checks the cross-correlation of the residuals. Model \u003e CCR Validation \u003e Residuals *  Data * = Training or Test Shows the auto-correlation of the prediction\u0027s residuals regarding the training or test data. The desired behavior is an exponentially decreasing correlation with a ..."},"301":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ModelExport.htm",l:-1,t:"Model Export ",i:0.000491763154901758,a:"Model Export  In this section you will learn how to export the ASCMO-DYNAMIC models to:"},"302":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ExporttoMatlab.htm",l:-1,t:"Export to MATLAB® ",i:0.000738424786545616,a:"When you export models to MATLAB®, an M file is generated for each output.  For more information, see  Model Export to MATLAB® . Export a model to MATLAB® File \u003e Export Model \u003e Matlab. Export to Matlab window Set the Base Name (defines the file names \u003cbase name\u003e_\u003coutput\u003e) and the Target Folder. ..."},"303":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ExporttoSimulink.htm",l:-1,t:"Export to Simulink® Model",i:0.000791396781595812,a:"  In addition to the Simulink® model file (*.mdl or *.sxl), an m-S function and TLC file per output is generated.  For more information, see  Model Export to Simulink® Model Model Export to Simulink® Model A Simulink® model is version-specific. If you have more than one version of Simulink® ..."},"304":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ExporttoSimulinkScript.htm",l:-1,t:"Export to Simulink® Script",i:0.000791396781595812,a:"A Simulink installation is not required to perform the export. When you export a model to Simulink Script, an M script file (*.m) and a TLC file are generated for each output. The script can later be used to create a Simulink model. For more information, see  Model Export to Simulink® Script Export ..."},"305":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ExporttoINCA-MDA.htm",l:-1,t:"Export to INCA/MDA ",i:0.000791396781595812,a:" The export to INCA/MDA exports the models as \"Calculated Signals\" for INCA/MDA 6.x. For MDA 8.x  export to FMU . These calculated signals are perl modules (*.pm) that INCA/MDA expects in a specific directory. Export a model to INCA/MDA File \u003e Export Model \u003e INCA/MDA. Export to INCA/MDA window Set ..."},"306":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ExporttocCode.htm",l:-1,t:"Export to C Code",i:0.000648449027036823,a:"When you export models to C code, a *.c file is generated for each output, as well as model-specific C files. For more information about these files, see LINK. Export a model to C code File \u003e Export Model \u003e C Code Export to C Code window Set the Base Name (defines the file names \u003cbase ..."},"307":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ExporttoGT-Suite.htm",l:-1,t:"Export to GT‑Suite ",i:0.000937672511081627,a:" The model export to GT-SUITE is an extended version of the C code export that allows you to load and use ASCMO-DYNAMIC models directly in GT-SUITE. When exporting model outputs to GT-SUITE, a C file is generated for each model output. Export a model to GT-SUITE  File \u003e Export Model \u003e GT‑Suite. ..."},"308":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ExporttoFMI.htm",l:-1,t:"Export to FMI ",i:0.000648449027036823,a:" When you export a model to FMI, a C file and a DLL file for Windows (32/64 bit) are generated for each output with a corresponding XML meta-description for the input and output specification. For an output named Y1, a file predict_Y1.fmu is generated.  For more information on FMI, see  Model Export ..."},"309":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ExporttoBoschAMU.htm",l:-1,t:"Export to Bosch AMU",i:0.000424592781422745,a:"Only NARX models with Gaussian process models with squared exponential kernel and logarithmic (or no) transformation are supported by the AMU, e.g., ASC GP, ASC GP-SCS, ASC Compressed. Export a model to Bosch AMU File  \u003e Export Model \u003e Bosch AMU. Bosch AMU Export window Select an output from the ..."},"310":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_ExporttoBoschFlatbuffers.htm",l:-1,t:"Export to Bosch Flatbuffers",i:0.000424592781422745,a:"Only Recurrent Neural Network (RNN) and Convolutional Neural Network (CNN) models can be exported to Bosch Flatbuffers. When you export a model to Flatbuffers, a *.dcm file is created for each output. Export a model to Bosch Flatbuffers File \u003e Export Model \u003e Bosch Flatbuffers Set the Base Name ..."},"311":{y:0,u:"../Content/Topics/ASCMOdyn_Tutorial_exportModel_Keras.htm",l:-1,t:"Export to Keras",i:0.000424592781422745,a:"Only Recurrent Neural Network (RNN) and Convolutional Neural Network (CNN) models can be exported to Keras. When you export a model to Keras, a *.keras file is created for each output, as well as the transformation.py file.  Export a model to Keras File \u003e Export Model \u003e Keras Export to Keras window ..."},"312":{y:0,u:"../Content/Topics/ASCMOdyn_Window_Start.htm",l:-1,t:" Start Window of ASCMO-DYNAMIC",i:0.000513478636416826,a:" Start Window of ASCMO-DYNAMIC From the ASCMO-DYNAMIC start window  you can open a new or existing project, as well as the provided demo files. It contains the following elements. Open From here you can open an existing  project. Click the   button to open a project from your computer. The Recent ..."},"313":{y:0,u:"../Content/Topics/ASCMOdyn_MainWindow.htm",l:-1,t:"Elements of the ASCMO-DYNAMIC User Interface",i:0.00339268517454772,a:"The main window of ASCMO-DYNAMIC consists of the following areas: ➀ Main menu ➁ Toolbar ➂ Inputs with  \"Dataset\" combo box  and   button (directly below the toolbar) ➃ Outputs ➄ Log window Status bar (footer) with current state information  \"Data Set\" Drop-down This drop-down offers all sets of ..."},"314":{y:0,u:"../Content/Topics/ASCMOdyn_MainMenu.htm",l:-1,t:"Main Menu of ASCMO-DYNAMIC ",i:0.000424592781422745,a:"Main Menu of ASCMO-DYNAMIC The main menu of ETAS ASCMO-DYNAMIC features the following entries:  "},"315":{y:0,u:"../Content/Topics/ASCMOdyn_Menu_File.htm",l:-1,t:"\n            File Menu (ASCMO-DYNAMIC)",i:0.0013216066087837,a:"\n            File Menu (ASCMO-DYNAMIC) The File menu consists of the following entries: New Returns to the  ASCMO-DYNAMIC start window  where a new ASCMO-DYNAMIC project can be created (by importing training data).  Clone Clones the current, opened ASCMO-DYNAMIC project and opens it as a new ..."},"316":{y:0,u:"../Content/Topics/ASCMOdyn_Menu_Data.htm",l:-1,t:"\n            Data Menu (ASCMO-DYNAMIC)",i:0.000840718522139064,a:"\n            Data Menu (ASCMO-DYNAMIC) The Data menu consists of the following entries: Table The data of the datasets are displayed as tables. There is a tab for each dataset. Data can be changed in the table. See also  Data Table . Scatter Plot Opens the  \n                Scatter Plot\n  window. ..."},"317":{y:0,u:"../Content/Topics/ASCMOdyn_Menu_InOutput.htm",l:-1,t:"In/Outputs Menu (ASCMO-DYNAMIC)",i:0.000569065964518377,a:"The In/Outputs menu contains the following entries: Input Properties   Select Inputs Opens the  \"Inputs Selection\" window  where you can select/deselect the inputs for the optimization and display. Change Input Name Opens the  \"Change Input Name\" window  where you can change input names and units. ..."},"318":{y:0,u:"../Content/Topics/ASCMOdyn_Menu_Model.htm",l:-1,t:"\n            Model Menu (ASCMO-DYNAMIC)",i:0.00170017008155017,a:"\n            Model Menu (ASCMO-DYNAMIC) The Model menu consists of the following entries: Configurations Opens the  \"Model Configurations\" window  where you can define model settings individually for each output in a separate tab.  Configurations for All Opens the  \"Model Configurations\" window  ..."},"319":{y:0,u:"../Content/Topics/ASCMOdyn_Menu_Optimization.htm",l:-1,t:"Optimization Menu (ASCMO-DYNAMIC)",i:0.0028303354626066,a:"The Optimization menu consists of the following entries: Export to MOCA  Opens the  \"Export Optimization Problem to MOCA\" window  where you can export the current global optimization problem to an ASCMO-MOCA project.  During the export, the inputs (except the ones selected as operating point axes) ..."},"320":{y:0,u:"../Content/Topics/ASCMOdyn_Menu_View.htm",l:-1,t:"View Menu (ASCMO-DYNAMIC)",i:0.000925451763273746,a:"The View menu consists of the following entries: Show Sigma The \"ASC_Dyn\" algorithm provides a sigma prediction, which shows the model\u0027s uncertainty. A weaker model behavior (i.e. a smaller value of R2) corresponds to increasing sigma values. View → Show Sigma shows/hides  sigma (red dashed line)  ..."},"321":{y:0,u:"../Content/Topics/ASCMOdyn_Menu_Plugins.htm",l:-1,t:"Plugins Menu (ASCMO-DYNAMIC)",i:0.000424592781422745,a:"The Plugins menu consists of the following entries: Select Plugins Enables selecting installed plugins for ASCMO-DYNAMIC. Activated plugins are displayed in Plugins menu or as subentries in the main menu. If you want to create your own plugins, you can find a detailed interface documentation under ..."},"322":{y:0,u:"../Content/Topics/ASCMOdyn_Menu_Help.htm",l:-1,t:"Help Menu (ASCMO-DYNAMIC)",i:0.000424592781422745,a:"The Help menu consists of the following entries: User Guide Opens the PDF ASCMO-DYNAMIC Help. Online Help (F1) Opens the  ASCMO-STATIC/ASCMO-DYNAMIC  online help. Interface Help  Opens the reference to the ASCMO-DYNAMIC interface (for the P-code version that requires the ASCMO_SDK license). License ..."},"323":{y:0,u:"../Content/Topics/ASCMOdyn_Toolbar.htm",l:-1,t:"Toolbar (ASCMO-DYNAMIC)",i:0.000836565908279666,a:"The toolbar contains a number of buttons that can be used to call up the following functions. New Project Opens the  start window of ASCMO-DYNAMIC , where you can create a new ASCMO-DYNAMIC project (by importing training data). Open Project Opens an ASCMO-DYNAMIC project (*.ascmodyn). Save Saves the ..."},"324":{y:0,u:"../Content/Topics/ASCMOdyn_Window_addCalculatedInputOutput.htm",l:-1,t:"Add Calculated Input/Output ",i:0.000666447134405952,a:"  In/Outputs menu  \u003e Add Calculated Input/Output The Add Calculated Input/Output window contains the following elements: Node Name of the input/output. Unit Unit of the input/output. The definition of a unit has no influence on the calibration of the parameter and is only visualized for support. ..."},"325":{y:0,u:"../Content/Topics/ASCMOdyn_Window_AnomalyDetectionScopeView.htm",l:-1,t:"Anomaly Detection Scope View",i:0.000520936638481231,a:"Model menu  \u003e Anomaly Detection Scope View The Anomaly Detection Scope View window  contains the following elements: Toolbar With the drop-downs you can select the output, model and dataset to be displayed. Each input signal is displayed in a separate plot. The last plot shows the output and the ..."},"326":{y:0,u:"../Content/Topics/ASCMOdyn_Window_DataImport.htm",l:-1,t:"\n            ASCMO Data Import (ASCMO-DYNAMIC)",i:0.00118976945674208,a:"ASCMO-DYNAMIC  start window  \u003e New \u003e Import Dynamic Data \n            The  ASCMO Data Import window  contains the following elements: File Load File Opens a file selection window where you can select input file.  Load Channel Config (*.ini, *.lab) Load an existing configuration of channels from an ..."},"327":{y:0,u:"../Content/Topics/ASCMOdyn_Window_AdvancedOptionsAutoML.htm",l:-1,t:"Parameter Range Automated Machine Learning (ASCMO-DYNAMIC)",i:0.00151849475727017,a:"Model menu  \u003e Automated Machine Learning \u003e Parameter Range button In the  Automated Machine Learning  window you can specify the settings for the automated machine learning and the range of hyperparameters. In the Parameter Range Automated Machine Learning window there are separate tabs for the  ..."},"328":{y:0,u:"../Content/Topics/ASCMOdyn_Window_CrossCorrel.htm",l:-1,t:"Cross Correlation Windows",i:0.000520936638481231,a:"The \"Cross Correlation of Residuals\" and \"Cross Correlation of Residuals and Inputs\" windows contain the following elements. File menu Save as Bitmap This allows the plot in the respective window to be saved as a bitmap graphic format. Close Closes the window. Help User Guide: Opens the PDF User ..."},"329":{y:0,u:"../Content/Topics/element_config_DYN.htm",l:-1,t:"\n            Element Configuration",i:0.000424592781422745,a:"\n            Element Configuration Visualization step  \u003e \u003e Configure Single Element The Element Configuration window contains the following elements:  Signals Checkboxes to filter for signal types. For node and criteria signals, reference data set evaluation is also available. Searchbar to search ..."},"330":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ExportOptProblem_MOCA.htm",l:-1,t:"\"Export Optimization Problem to MOCA\" Window (ASCMO-DYNAMIC)",i:0.0028303354626066,a:"The \"Export Optimization Problem to MOCA\" window is opened via Optimization → Export to MOCA in the ASCMO-DYNAMIC window. This window contains the following elements: \"Choose a File Path and Name\" area \"File Name\" field and   button Enter or select (via the   button) path and name of the resulting ..."},"331":{y:0,u:"../Content/Topics/ASCMOdyn_Window_GDS_Settings.htm",l:-1,t:"Guided Dataset Selection - Settings",i:0.00293963860846067,a:"Data menu \u003e Guided Dataset Selection The Guided Dataset Selection - Settings window contains the following elements: Lookback Length Enter a value for the lookback length. Consecutive data points up to the lookback length are used to take gradients into account when calculating the distances. Only ..."},"332":{y:0,u:"../Content/Topics/ASCMOdyn_Window_GDS.htm",l:-1,t:"\"Guided Dataset Selection\" Window",i:0.00418413045845383,a:"Guided Dataset Selection Data menu \u003e Guided Dataset Selection \u003e OK The  Guided Dataset Selection window  contains the following elements:   Scatter Plot  Opens Scatter Plot to display scatter plots of the input and outputs, their gradients and errors.  Next Accepts the selected datasets as training ..."},"333":{y:0,u:"../Content/Topics/ASCMOdyn_Window_InitialState_NARX.htm",l:-1,t:"Initial State of NARX Values",i:0.000859181502964839,a:"Model menu \u003e NARX Model Options \u003e Initial State of NARX Values The  Initial State of NARX Values window  contains the following elements: Initial State of NARX Structure Inputs This area contains one row for each input. Each row contains the following elements: \u003cinput\u003e: Define a constant value for ..."},"334":{y:0,u:"../Content/Topics/ASCMOdyn_Window_InputRelevance.htm",l:-1,t:"\n            \"Input Relevance\" Window (ASCMO-DYNAMIC            )       ",i:0.000520936638481231,a:"\n            \"Input Relevance\" Window (ASCMO-DYNAMIC            )        \n            The \"Input Relevance\" window (Model  \u003e Input Relevance (RMSE)  \u003e*\n            ) can be opened for all or a single output. The settings you define here affect the plot in the \n             \"Relevance of Inputs\" ..."},"335":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ManageDataSets.htm",l:-1,t:"\n            Manage Datasets",i:0.00561328096465448,a:"\n            Manage Datasets  in the ASCMO-DYNAMIC main window   (next to the Dataset drop-down) Data \u003e Manage Datasets \n            The  Manage Datasets window  allows you to rename and delete datasets. You can edit, delete, and assign labels, which you can also use to swap training/validation/test ..."},"336":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ModProp.htm",l:-1,t:"\n            Model Configurations (ASCMO-DYNAMIC)",i:0.0078178490973406,a:"The Model Configurations window Model \u003e Configurations provides a separate tab for each output. Each tab contains elements to determine the model properties individually for each output. You can define several configurations in which you specify the modeling method and the model type. Output Name ..."},"337":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ModProp_NARX.htm",l:-1,t:"Model Configurations: NARX Structure",i:0.00260610768341967,a:"When you select the NARX Structure modeling method Model \u003e Configurations, the Model Properties area of the \u003coutput\u003e tab contains the following elements. For each output there is a separate tab. See  \n            Model Configurations (ASCMO-DYNAMIC) , for a description of the Output Properties area ..."},"338":{y:0,u:"../Content/Topics/ASCMOdyn_Window_AutoFeatureSelect.htm",l:-1,t:"\n            Configure Automatic Feature Selection \u003coutput\u003e",i:0.00120473931905357,a:"\n            Configure Automatic Feature Selection \u003coutput\u003e Model menu  \u003e NARX Feature Search \u003e Configure \n            The  Configure Automatic Feature Selection \u003coutput\u003e window  for the NARX structure modeling method  contains the following elements. Model Type Select the NARX model type you want ..."},"339":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ModProp_RNN.htm",l:-1,t:"\n            Model Configurations: Recurrent Neural Network (RNN)",i:0.00259222791048464,a:"\n            Model Configurations: Recurrent Neural Network (RNN) Model \u003e Configurations When you select the Recurrent Neural Network modeling method, the Model Configuration area of the \u003coutput\u003e tab contains the following elements. For each output there is a separate tab. See  \n            Model ..."},"340":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ModProp_CNN.htm",l:-1,t:"\n           Model Configurations: Convolutional Neural Network (CNN)",i:0.00182901253040704,a:"\n           Model Configurations: Convolutional Neural Network (CNN) When you select the Convolutional Neural Network modeling method Model \u003e Configurations, the Model Configuration area of the \u003coutput\u003e tab contains the following elements. For each output there is a separate tab. See  \n            ..."},"341":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ModProp_StaticModel.htm",l:-1,t:"Model Configurations: Static Model ",i:0.00102870802276635,a:" When you select the Static Model modeling method Model \u003e Configurations, the Model Properties area of the \u003coutput\u003e tab contains the following elements. For each output there is a separate tab. See  \n            Model Configurations (ASCMO-DYNAMIC) , for a description of the Output Properties area ..."},"342":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ModProp_Ensemble.htm",l:-1,t:"Model Configurations: Ensemble Model",i:0.00119808654432274,a:"When you select the Ensemble Model modeling method Model \u003e Configurations, the Model Properties area of the \u003coutput\u003e tab contains the following elements. For each output there is a separate tab. See  \n            Model Configurations (ASCMO-DYNAMIC) , for a description of the Output Properties area ..."},"343":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ModProp_AnomalyDetection_(PCA).htm",l:-1,t:"Model Configurations: Anomaly Detection (PCA)",i:0.00117318120586198,a:"When you select the Anomaly Detection (PCA) modeling method Model \u003e Configurations, the Model Properties area of the \u003coutput\u003e tab contains the following elements. For each output there is a separate tab. See  \n            Model Configurations (ASCMO-DYNAMIC) , for a description of the Output ..."},"344":{y:0,u:"../Content/Topics/ASCMOdyn_Window_ModProp_AnomalyDetection_(Autoencoder).htm",l:-1,t:"Model Configurations: Anomaly Detection (Autoencoder)",i:0.00102870802276635,a:"When you select the Anomaly Detection (Autoencoder) modeling method Model \u003e Configurations, the Model Configuration area of the \u003coutput\u003e tab contains the following elements. For each output there is a separate tab. See  \n            Model Configurations (ASCMO-DYNAMIC) , for a description of the ..."},"345":{y:0,u:"../Content/Topics/ASCMOdyn_window_ModeConfigurationManager.htm",l:-1,t:"\n            \"Model Configuration Manager\" Window",i:0.000905981017252192,a:"\n            \"Model Configuration Manager\" Window The \"Model Configuration Manager\" window (Model \u003e Configuration Manager) contains the  \n            \"Model Configuration Manager\" Window  and the  \n            \"Model Configuration Manager\" Window : \"Edit and Compare\" tab The  \"Edit and Compare\" tab  ..."},});