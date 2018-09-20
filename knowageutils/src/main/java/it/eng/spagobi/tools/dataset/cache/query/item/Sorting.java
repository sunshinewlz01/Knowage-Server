/*
 * Knowage, Open Source Business Intelligence suite
 * Copyright (C) 2016 Engineering Ingegneria Informatica S.p.A.
 *
 * Knowage is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Knowage is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package it.eng.spagobi.tools.dataset.cache.query.item;

import it.eng.spagobi.tools.dataset.bo.IDataSet;
import it.eng.spagobi.tools.dataset.common.query.IAggregationFunction;

public class Sorting {

	private Projection projection;
	private boolean isAscending;

	public Sorting(IDataSet dataSet, String columnAliasOrName, boolean isAscending) {
		this(new Projection(dataSet, columnAliasOrName), isAscending);
	}

	public Sorting(IAggregationFunction aggregationFunction, IDataSet dataSet, String columnAliasOrName, boolean isAscending) {
		this(new Projection(aggregationFunction, dataSet, columnAliasOrName), isAscending);
	}

	public Sorting(Projection projection, boolean isAscending) {
		this.projection = projection;
		this.isAscending = isAscending;
	}

	public Projection getProjection() {
		return projection;
	}

	public boolean isAscending() {
		return isAscending;
	}

}