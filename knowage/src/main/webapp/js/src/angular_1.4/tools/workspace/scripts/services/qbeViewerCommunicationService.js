angular
	.module('qbe_viewer')
	.service('qbeViewerMessagingHandler', function(sbiModule_restServices,windowCommunicationService) {
			var comunicator = windowCommunicationService;
			var crudHandler = {}
			var dataset;
			var parameters;

			crudHandler.initalizeHandler = function(dataset,parameters,persistFunction){
				setDataset(dataset);
				setParameters(parameters);
				var saveHandler = {};
				saveHandler.name = "save";

				saveHandler.handleMessage = function(message){
					if(isFromDatasetCatalog(message)) {
						datasetCatalogUpdateProces(message,dataset,parameters)
					}else if(isFromWorkspace(message)){
						workspaceDSUpdateProces(message,dataset,persistFunction);
					}
				}
				return saveHandler;
			};
			crudHandler.registerHandler = function(handler){
				comunicator.addMessageHandler(handler);
			};


			var updateDSQuery = function(message){
				return message.qbeQuery;
			}
			var updateDSPars = function(message){
				return message.pars;
			}
			var workspaceDSUpdateProces = function(message,dataset,persistFunction){
				dataset.qbeJSONQuery = updateDSQuery(message);
				persistFunction();
			}
			var datasetCatalogUpdateProces = function(message,dataset,parameters){
				//parameters = updateDSPars(message);
				angular.copy(message.pars,parameters)
				dataset.qbeJSONQuery = updateDSQuery(message);
			}

			var setDataset = function(originalDataset){
				dataset = originalDataset;
			}

			var setParameters = function(parametersList){
				parameters = parametersList;
			}

			var isFromWorkspace = function(message){
				return message.name == "workspace";
			}

			var isFromDatasetCatalog = function(message){
				return message.pars;
			}

			return crudHandler
	});