/**
 * Copyright © 2014, Oracle and/or its affiliates. All rights reserved.
 */
if (!VAT) { var VAT = {}; }
VAT.DAO.Nexus = function Nexus(id) {
VAT.DAO.NexusDAO = function NexusDAO() {
VAT.DAO.NexusDAO.prototype.getById = function getById(id) {
    var filter = [new nlobjSearchFilter('internalid', null, 'is', id)];
VAT.DAO.NexusDAO.prototype.getByCountryCode = function getByCountryCode(country) {
    var filter = [new nlobjSearchFilter('country', null, 'is', country)];
    return nexus;
VAT.DAO.NexusDAO.prototype.objectify = function objectify(row) {
};