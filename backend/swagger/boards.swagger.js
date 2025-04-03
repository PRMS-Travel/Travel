/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: 유저 관련 API
 *   - name: Places
 *     description: 장소 관련 API
 *   - name: Schedules
 *     description: 일정 관련 API
 *   - name : Maps
 *     description: 지도 관련 API
 * 
 * paths:
 *   /login:
 *     post:
 *       tags:
 *         - Users
 *       summary: Update an existing pet.
 *       description: Update an existing pet by Id.
 *       operationId: updatePet
 *       requestBody:
 *         description: Update an existent pet in the store
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *           application/xml:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *           application/x-www-form-urlencoded:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *         required: true
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Pet'
 *             application/xml:
 *               schema:
 *                 $ref: '#/components/schemas/Pet'
 *         '400':
 *           description: Invalid ID supplied
 *         '404':
 *           description: Pet not found
 *         '422':
 *           description: Validation exception
 *         default:
 *           description: Unexpected error
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: "#/components/schemas/Error"
 *       security:
 *         - petstore_auth:
 *             - write:pets
 *             - read:pets
 * 
 *   /join:
 *     post:
 *       tags:
 *         - Users
 *       summary: Update an existing pet.
 *       description: Update an existing pet by Id.
 *       operationId: updatePet
 *       requestBody:
 *         description: Update an existent pet in the store
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *           application/xml:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *           application/x-www-form-urlencoded:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *         required: true
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Pet'
 *             application/xml:
 *               schema:
 *                 $ref: '#/components/schemas/Pet'
 *         '400':
 *           description: Invalid ID supplied
 *         '404':
 *           description: Pet not found
 *         '422':
 *           description: Validation exception
 *         default:
 *           description: Unexpected error
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: "#/components/schemas/Error"
 *       security:
 *         - petstore_auth:
 *             - write:pets
 *             - read:pets
 */

